export const typeIs = (o) => {
  return Object.prototype.toString.call(o).toLowerCase().slice(8, -1);
};

export const isNull = (o) => typeIs(o) === 'null';
export const isUndefined = (o) => typeIs(o) === 'undefined';
export const isString = (o) => typeIs(o) === 'string';
export const isNumber = (o) => typeIs(o) === 'number';
export const isBoolean = (o) => typeIs(o) === 'boolean';
export const isSymbol = (o) => typeIs(o) === 'symbol';
export const isFunction = (o) => typeIs(o) === 'function';
export const isArray = (o) => typeIs(o) === 'array';
export const isObject = (o) => typeIs(o) === 'object';
