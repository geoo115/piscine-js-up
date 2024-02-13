function round(n) {
  let negative = false;
  if (n < 0) {
    negative = true;
    n = -n;
  }
  let counter = 0;
  while (!(n < 1 && n > -1)) {
    n -= 1;
    counter++;
  }
  if (n < 0.5) {
    if (negative) {
      return -counter;
    } else {
      return counter;
    }
  } else {
    if (negative) {
      return -counter - 1;
    } else {
      return counter + 1;
    }
  }
}
function ceil(n) {
  if (!n) return 0;
  let negative = false;
  if (n < 0) {
    negative = true;
    n = -n;
  }
  let intCopy = n;
  let counter = 0;
  while (!(intCopy < 1 && intCopy >= 0)) {
    intCopy -= 1;
    counter++;
  }
  if (negative) {
    return -counter;
  } else {
    return counter + 1;
  }
}
function floor(n) {
  let negative = false;
  if (n < 0) {
    negative = true;
    n = -n;
  }
  let intCopy = n;
  let counter = 0;
  while (!(intCopy < 1 && intCopy > -1)) {
    intCopy -= 1;
    counter++;
  }
  if (negative) {
    return -counter - 1;
  } else {
    return counter;
  }
}
function trunc(n) {
  let counter = 0;
  if (n > 0xfffffffff) {
    n -= 0xfffffffff;
    counter += 0xfffffffff;
  }
  let neg = false;
  if (n < 0) {
    neg = true;
    n = -n;
  }
  let intCopy = n;
  while (!(intCopy < 1 && intCopy > -1)) {
    intCopy -= 1;
    counter++;
  }
  if (neg) {
    return -counter;
  }
  return counter;
}