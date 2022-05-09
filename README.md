###### SK 동반성장 BP사 대상 “React & Vue" 교육

# 프리페어레이션

학습에 앞서 준비해야 할 사항을 안내합니다. (참고: [yamoo9's Preparing for Class](https://yamoo9.github.io/preparing-for-class/))

## 사전 설문

"[SK 동반 성장, React & Vue 교육 사전 설문](https://forms.gle/p7BudfLtvyo5SJ9S9)"에 응답해주세요.

## 선행 학습

아래 나열된 웹 표준 기술은 수업 시간에 별도 설명없이 활용되므로 선행 학습이 필요합니다.

- [HTML](https://developer.mozilla.org/ko/docs/Web/HTML)：의미있는 구조화(Semantic Markup)
- [CSS](https://developer.mozilla.org/ko/docs/Web/CSS)：모던 레이아웃(Flexbox & CSS Grid 등)
- [JavaScript](https://ko.javascript.info/)：DOM 접근/조작, 명령형 프로그래밍(Imperative, Event Handling 등)
- [ECMAScript NEXT](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)：모던 JavaScript (v6(2015) 이후 매년 릴리스 됨)
- [DOM](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model)：문서 객체 모델
- [CSSOM](https://developer.mozilla.org/ko/docs/Web/API/CSS_Object_Model)：CSS 객체 모델
- [WCAG](http://www.kwacc.or.kr/WAI/wcag21/) / [KWCAG](http://bit.ly/kwcag21)：웹 콘텐츠 접근성 지침 국제/국가 표준
- [WAI-ARIA](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA)：애플리케이션 접근성 개선 국제 표준

## 권장 학습

아래 나열된 기술은 수업 시간에 다루는 주제입니다. 가능하다면 사전 학습을 권장합니다.

- [Git](https://git-scm.com/)：버전 관리 시스템
- [Sass](https://sass-lang.com/)：CSS 프리 프로세서
- [TypeScript](https://typescriptlang.org/)：타입 시스템 + 모던 JavaScript
- [Webpack](https://webpack.js.org/)：모듈 번들러
- [Babel](https://babeljs.io/)：JavaScript 컴파일러
- [esbuild](https://esbuild.github.io) / [SWC](https://swc.rs/)：엄청 빠른 JavaScript 번들러
- [ESLink](https://eslint.org/)：JavaScript 린터
- [Prettier](https://prettier.io/)：코드 포멧터
- [Jest](https://jestjs.io/)：테스팅 프레임워크

## 학습 방법 추천

줌(Zoom)을 사용한 화상 강의의 특성 상 녹화 된 강의를 시청하는 것과는 학습 환경이 다릅니다.  
강의는 각 주제의 개념을 설명 함과 동시에 라이브 코딩 합니다. 주제 별 학습과 실습을 동시 진행하기 어려울 경우  
학습과 실습을 병행한 방식보다 강의 주제를 듣고 노트에 정리한 후, 추후에 시간을 내서 실습하며 복습하는 것이 효과적입니다.

## 학습 준비

학습에 앞서 준비해야 할 사항을 안내합니다.

### 웹 브라우저

강의 중 주로 사용하는 브라우저는 [Google Chrome](https://www.google.com/intl/ko/chrome/)입니다.  
다른 웹 브라우저를 사용해도 무방합니다. ([Mozilla Firefox, Microsoft Edge](https://browsehappy.com/) 등)

#### 웹 브라우저 확장

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)
- [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)

### 코드 에디터

강의에서 사용되는 에디터는 Microsoft 사의 [Visual Studio Code](https://code.visualstudio.com/) 입니다.

### 런타임 환경

강의에서 [Node.js](https://nodejs.org/ko/) 런타임 환경을 사용합니다. (Node v14+ 권장)

```sh
node -v
npm -v
npx -v
```

#### Bash 쉘 스크립트

강의에서 사용하는 명령어 환경은 [Bash Shell](<https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%8B%9C_(%EC%9C%A0%EB%8B%89%EC%8A%A4_%EC%85%B8)>) (또는 [Zsh](https://ko.wikipedia.org/wiki/Z_%EC%85%B8))입니다.

Windows에서 Bash Shell을 사용하려면? [Git for Windows](https://gitforwindows.org/)를 설치한 후 Git Bash 에뮬레이터를 사용하세요.  
Windows 10 사용자인 경우, [WSL](https://docs.microsoft.com/ko-kr/windows/wsl/about)을 설치해 Ubuntu를 사용하는 방법으로 대체할 수 있습니다.

💡 Power Shell 또는 CMD 명령에 능숙한 사용자라면? 꼭 Bash Shell을 사용할 필요는 없습니다.

### 학습 저장소

학습 저장소 [yamoo9/SK-FE-2022](https://github.com/yamoo9/SK-FE-2022)를 로컬 컴퓨터에 복제(clone) 하세요.

```sh
git clone https://github.com/yamoo9/SK-FE-2022.git
```

💡 `git` 커멘드를 사용하려면 [Git이 컴퓨터에 설치되어 있어야 합니다.](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98)

```sh
git --version # git version 2.xx.x
```

<br />

<small>COPYRIGHT ALL RESERVED. 2022 @ EUID</small>
