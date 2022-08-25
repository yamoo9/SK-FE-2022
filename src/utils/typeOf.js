const typeOf = (o) =>
  Object.prototype.toString.call(o).slice(8, -1).toLowerCase();

export const isString = (o) => typeOf(o) === 'string';
export const isBoolean = (o) => typeOf(o) === 'boolean';
export const isNumeric = (o) => typeOf(o) === 'number' && !isNaN(o);
export const isNumericString = (o) => isString(o) && isNumeric(+o);
export const isSymbol = (o) => typeOf(o) === 'symbol';
export const isFunction = (o) => typeOf(o) === 'function';
export const isObject = (o) => typeOf(o) === 'object';
export const isArray = (o) => typeOf(o) === 'array';

export default typeOf;
