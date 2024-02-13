/* const isValid = (date) => date > 0 || date < 0;
const isAfter = (date1, date2) => date1 > date2;
const isBefore = (date1, date2) => date1 < date2;
const isFuture = (date) => date > Date.now()
const isPast = (date) => isValid(date) ? date < Date.now() : false;
 */
function isValid(date) {
  return date > 0 || date < 0;
}

function isAfter(date1, date2) {
  return date1 > date2;
}

function isBefore(date1, date2) {
  return date1 < date2;
}

function isFuture(date) {
  return date > Date.now();
}

function isPast(date) {
  if (isValid(date)) {
    return date < Date.now();
  } else {
    return false;
  }
}
