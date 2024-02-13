function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  function opDebounce(func, delay, options = {}) {
    let timeoutId;
    let leadingCall = false;
    let { leading = false } = options;
  
    return function (...args) {
      if (leading && !leadingCall) {
        func.apply(this, args);
        leadingCall = true;
      }
  
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (!leading) {
          func.apply(this, args);
        }
        leadingCall = false;
      }, delay);
    };
  }
  