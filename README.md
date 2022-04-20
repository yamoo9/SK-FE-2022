###### SK 동반성장 BP사 대상 “React & Vue" 교육

# 프로그래밍 언어

React, Vue 학습에서 앞서 자주 사용되는 프로그래밍 언어에 대한 이해가 필요합니다.

- __ECMAScript__ (필수)
- TypeScript (선택)

## ECMAScript NEXT

애플리케이션 개발에서 효율적으로 활용하기 위해서 모던 JavaScript의 새로운 기능을 배우고 적극적으로 활용해야 합니다.  
여기에서 소개하는 새로운 기능들은 React, Vue 사용을 위해 필히 알아야 할 [JavaScript의 새로운 기능](https://2021.stateofjs.com/ko-KR/features/language)입니다.

### 학습 환경 구성

자주 사용되는 ECMAScript NEXT 학습을 목적으로 학습 환경을 구성합니다.

- [Babel](https://babeljs.io/setup#installation) 컴파일러 또는 [esbuild](https://esbuild.github.io/) 번들러
- [ESLint](https://eslint.org/) / ESLint 플러그인 [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest#installation)
- [Jest](https://jestjs.io/) 테스팅 라이브러리
- [Prettier](https://prettier.io/) 코드 포멧터

#### 환경 구성 절차

프로젝트 초기화 (`package.json` 파일 생성)

```sh
npm init -y
```

Babel 패키지 설치

```sh
npm i -D @babel/core @babel/cli @babel/preset-env
```

Jest, ESLint 패키지 설치

```sh
npm i -D jest eslint eslint-plugin-jest @types/jest
```

rimraf 패키지 설치

```sh
npm i -D rimraf
```

NPM 스크립트 추가 / Jest 테스트 경로 제외 패턴 디렉토리 등록

`package.json`

```json
{
  "scripts": {
    "compile": "babel src/chapter/*.js -d compiled",
    "watch": "npm run compile -- --watch",
    "test": "jest --watchAll",
    "clear": "rimraf -rf compiled"
  },
  "jest": {
    "testPathIgnorePatterns": ["/node_modules/", "/compiled/"]
  }
}
```

Jest [타입 취득(Type Acquisition)](https://www.typescriptlang.org/ko/tsconfig#typeAcquisition) 포함(include) 설정

`jsconfig.json`

```json
{
  "typeAcquisition": {
    "include": ["jest"]
  }
}
```

ESList 구성

```sh
npx eslint --init
```

vscode 확장 - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 설치

`.eslintrc.js`

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  settings: {
    jest: { version: 27 },
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
		'jest/no-try-expect': 'off', // DEPRECATED
    'jest/no-conditional-expect': 'off',
  },
};
```

ESLint 제외 설정

`.eslintignore`

```yml
compiled
```

Babel 구성

`.babelrc`

```json
{
  "comments": false,
  "presets": [
    ["@babel/preset-env", { "loose": true }]
  ]
}
```

Prettier 구성

vscode 확장 [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 설치

```json
{
  "semi": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80,
  "singleQuote": true,
  "endOfLine": "auto",
  "trailingComma": "es5",
  "arrowParens": "always",
  "bracketSpacing": true,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "insertPragma": false,
  "requirePragma": false,
  "vueIndentScriptAndStyle": true,
  "overrides": [
    {
      "files": "*.json",
      "options": {
        "printWidth": 160
      }
    }
  ]
}
```

Browserslist 구성

`.browserslistrc`

```yml
defaults
not dead
> 1% in KR
IE 11
maintained node versions
```