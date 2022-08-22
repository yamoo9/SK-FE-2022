/* --------------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                              */
/* --------------------------------------------------------------------------------- */

/* 클래스 유틸리티 함수 ----------------------------------------------------------------- */

function createClass(classObject, SuperClass) {
  if (!classObject) throw new TypeError('첫번째 인자인 classObject 객체가 설정되지 않았습니다.');

  // @constructor
  var Class = createClass.extractPropValue(classObject, 'constructor');

  // @static
  var staticMembers = createClass.extractPropValue(classObject, 'static');

  if (staticMembers) {
    createClass.exntends(Class, staticMembers);
  }

  // @prototype
  if (!Class.prototype) Class.prototype = {};
  createClass.exntends(Class.prototype, classObject);

  // @super
  var Super = createClass.defaultArg(SuperClass, null);

  if (Super) {
    createClass.exntends(Class, Super);
    createClass.exntends(Class.prototype, Super.prototype);
    Class.prototype.consturctor = Class;
  }

  Class.prototype.constructor = Class;

  return Class;
}

createClass.getFunctionParameters = function (func) {
  var fnStr = func.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
  var argsList = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')'));
  var result = argsList.match(/(?:^|,)\s*([^\s,=]+)/g);

  if(result === null) {
    return [];
  }
  else {
    var stripped = [];
    for ( var i = 0; i < result.length; i++  ) {
      stripped.push( result[i].replace(/[\s,]/g, '') );
    }
    return stripped;
  }
}

createClass.defaultArg = function (value, initialValue) {
  return value === undefined ? initialValue : value;
};

createClass.extractPropValue = function (object, propName) {
  var value = object[propName];
  value && delete object[propName];
  return value;
};

createClass.exntends = function (o1, o2) {
  for (var key in o2) {
    if ({}.hasOwnProperty.call(o2, key)) {
      if (!o1[key]) {
        o1[key] = o2[key];
      } else {
        o1[key]._super[key] = o2[key];
      }
    }
  }
};


/* -------------------------------------------------------------------------- */


// Button 클래스
var Button = createClass({
  constructor: function(type, label) {
    this.type = type;
    this.label = label;
  },
  static: {
    version: '1.0.0',
  },
  getType: function () {
    return this.type;
  },
});

// Button 클래스를 확장한 AriaButton 클래스
var AriaButton = createClass(
  {
    constructor: function(type, label, usingAria) {
      Button.apply(this, arguments);
      this.usingAria = createClass.defaultArg(usingAria, true);
    },
    static: {
      displayName: 'AriaButton',
    },
    getVersion: function () {
      return AriaButton.version;
    },
  },
  Button
);