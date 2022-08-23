/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// Actual DOM
// Virtual DOM

// primitives [string, number, boolean, null, undefined, Symbol] vs. object [function, array, object]

const virtualNode = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: { cssText: '' },
};

// const styled = (cssRulesArray, node) => {
//   node.style.cssText = cssRulesArray.reduce((result, cssRule) => result + cssRule, '');
// };

// tagged template
// styled`
//   ${virtualNode}
//   font-weight: bold;
//   font-size: 2rem;
// `;

// console.log(typeof virtualNode.style.cssText);

// curring function
// function expression
// const $styled = function(node) {
//   return function(cssRulesArray) {
//     node.style.cssText = cssRulesArray.reduce(function(result, cssRule) {
//       return result + cssRule
//     }, '');
//   }
// };

// arraw function expression
const $styled = node => cssRulesArray => {
  node.style.cssText = cssRulesArray.reduce((result, cssRule) => result + cssRule, '');
};

console.log('before:', virtualNode.style.cssText);

// tagged template (excute function)
$styled(virtualNode)`
  font-weight: bold;
  font-size: 2rem;
`;

console.log('after:', virtualNode.style.cssText);


// DOM Script

const abbrElement = document.querySelector('abbr');

$styled(abbrElement)`
  font-weight: 100;
  font-size: 3rem;
  letter-spacing: 0.4em;
`;