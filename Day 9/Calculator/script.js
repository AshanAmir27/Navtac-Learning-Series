// Put everything inside an IIFE to avoid polluting global scope
(function () {
  // Target an existing output container if present, otherwise use body
  const host = document.getElementById('output') || document.body;

  // Create UI
  const container = document.createElement('div');
  container.className = 'calc-container';

  const header = document.createElement('div');
  header.className = 'header';
  header.innerHTML = `<div class="title">Elegant Calculator</div>
                      `;
  container.appendChild(header);

  const display = document.createElement('input');
  display.className = 'display';
  display.id = 'display';
  display.type = 'text';
  display.inputMode = 'decimal';
  display.autocomplete = 'off';
  display.placeholder = '0';
  display.value = '';
  container.appendChild(display);

  // Toolbar: Clear, Cut, Copy, Delete
  const toolbar = document.createElement('div');
  toolbar.className = 'toolbar';
  const tools = [
    { key: 'C', label: 'C', cls: 'tool clear' },
    { key: 'del', label: '⌫', cls: 'tool delete' },
  ];
  tools.forEach(t => {
    const b = document.createElement('button');
    b.className = t.cls;
    b.type = 'button';
    b.innerText = t.label;
    b.addEventListener('click', () => handleTool(t.key));
    toolbar.appendChild(b);
  });
  container.appendChild(toolbar);

  // Buttons layout
  const buttonsLayout = [
    ['7','8','9','÷'],
    ['4','5','6','×'],
    ['1','2','3','-'],
    ['0','.','+','('],
    [')','=', '', ''] // '=' will occupy one cell (we will style below)
  ];

  const buttons = document.createElement('div');
  buttons.className = 'buttons';

  // Flatten and create buttons
  buttonsLayout.flat().forEach((text, idx) => {
    // Empty spacer if ''
    if (!text) {
      const spacer = document.createElement('div');
      buttons.appendChild(spacer);
      return;
    }
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'calc-btn';
    btn.innerText = text;

    // Special classes
    if (['÷','×','-','+'].includes(text)) btn.classList.add('operator');
    if (text === '=') { btn.classList.add('equal'); }
    if (text === '0') btn.classList.add('zero');

    btn.addEventListener('click', () => handleButton(text));
    buttons.appendChild(btn);
  });

  container.appendChild(buttons);
  host.appendChild(container);

  /* ---------- Logic & Helpers ---------- */

  // Allowed characters for keyboard typing (visual symbols and eval-friendly)
  const ALLOWED_CHARS = /^[0-9+\-*/().×÷\s]*$/;

  // Map visual symbols to JS-eval symbols
  function toEvalExpression(str) {
    return str.replace(/×/g, '*').replace(/÷/g, '/');
  }

  function sanitizeForEval(str) {
    // Replace visual operator symbols and remove anything not expected
    const expr = toEvalExpression(str);
    // disallow letters or unexpected characters
    if (!/^[0-9+\-*/().\s]*$/.test(expr)) return null;
    return expr;
  }

  function handleTool(key) {
    if (key === 'C') { display.value = ''; display.focus(); return; }
    if (key === 'del') { display.value = display.value.slice(0, -1); display.focus(); return; }
    if (key === 'copy') {
      if (!navigator.clipboard) { fallbackCopy(display.value); return; }
      navigator.clipboard.writeText(display.value || '').catch(() => fallbackCopy(display.value));
      return;
    }
    if (key === 'cut') {
      const text = display.value || '';
      if (!navigator.clipboard) { fallbackCopy(text); display.value = ''; return; }
      navigator.clipboard.writeText(text).then(() => { display.value = ''; display.focus(); })
        .catch(() => { fallbackCopy(text); display.value = ''; });
      return;
    }
  }

  function fallbackCopy(text) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    } catch (e) {
      // ignore
    }
  }

  function isOperatorChar(ch) {
    return ['+','-','*','/','×','÷'].includes(ch);
  }

  function handleButton(text) {
    if (text === '=') return evaluateExpression();
    if (text === 'C') { display.value = ''; display.focus(); return; }
    if (text === '⌫') { display.value = display.value.slice(0, -1); display.focus(); return; }

    // # Smart insertion rules:
    const last = display.value.slice(-1);

    // Prevent two operators in a row — replace last operator with new one
    if (isOperatorChar(text) && isOperatorChar(last)) {
      // allow negative sign after operator (e.g., "5 * -2")
      if (text === '-' && last !== '-') {
        display.value += text;
      } else {
        // replace last operator
        display.value = display.value.slice(0, -1) + text;
      }
      display.focus();
      return;
    }

    // Prevent duplicate decimal in the same number
    if (text === '.') {
      const tokens = display.value.split(/[\+\-\*\/×÷\s()]+/);
      const lastNum = tokens[tokens.length - 1] || '';
      if (lastNum.includes('.')) return; // ignore
    }

    display.value += text;
    display.focus();
  }

  function evaluateExpression() {
    const raw = (display.value || '').trim();
    if (!raw) return;
    const sanitized = sanitizeForEval(raw);
    if (sanitized === null) {
      showTempError('Invalid characters');
      return;
    }
    try {
      // safely evaluate using Function instead of raw eval
      // wrap in parentheses to allow unary minus expressions
      const result = Function('"use strict"; return (' + sanitized + ')')();
      if (result === Infinity || result === -Infinity || Number.isNaN(result)) {
        showTempError('Math Error');
        return;
      }
      display.value = String(result);
    } catch (err) {
      showTempError('Error');
    }
  }

  // show temporary error and clear after short time
  let errorTimer = null;
  function showTempError(msg) {
    const prev = display.value;
    display.value = msg;
    clearTimeout(errorTimer);
    errorTimer = setTimeout(() => {
      display.value = '';
      display.focus();
    }, 900);
  }

  /* ---------- Keyboard support ---------- */

  // Keydown: Enter evaluates, Backspace works normally, restrict invalid keys
  display.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      return evaluateExpression();
    }
    // Allow navigation, backspace, delete, arrows, tab
    const controlKeys = ['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab','Home','End'];
    if (controlKeys.includes(e.key)) return;

    // Allow Ctrl/Cmd combinations (copy/paste)
    if (e.ctrlKey || e.metaKey) return;

    // Allow one-character keys matching allowed pattern
    if (e.key.length === 1) {
      // convert common visual operator keys to allowed set for typing: ×, ÷ rarely typed; * and / are used
      const allowed = '0123456789+-*/().';
      if (!allowed.includes(e.key)) {
        e.preventDefault();
      }
    }
  });

  // Clean pasted content (filter out letters etc)
  display.addEventListener('paste', (ev) => {
    ev.preventDefault();
    const text = (ev.clipboardData || window.clipboardData).getData('text') || '';
    // Keep only numbers, operators, parentheses, dots and space
    const filtered = text.replace(/[^0-9+\-*/().×÷\s]/g, '');
    const start = display.selectionStart ?? display.value.length;
    const end = display.selectionEnd ?? display.value.length;
    const newVal = display.value.slice(0, start) + filtered + display.value.slice(end);
    display.value = newVal;
    // place cursor after pasted content
    const afterPos = start + filtered.length;
    requestAnimationFrame(() => display.setSelectionRange(afterPos, afterPos));
  });

  // Optional: allow clicking operators from keyboard numpad too (handled by allowed keys)
})();
