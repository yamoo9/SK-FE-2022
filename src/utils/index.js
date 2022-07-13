export function log(message, cssCode = '') {
  console.log(`%c${message}`, cssCode);
}

export function getNode(selector, context = document) {
  return context.querySelector(selector);
}

export function getNodeList(selector, context = document) {
  return context.querySelectorAll(selector);
}
