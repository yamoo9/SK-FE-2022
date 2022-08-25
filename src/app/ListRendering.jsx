// import React from 'react';
import { PrettyPrintCode } from '@/components';

// `server/db.json` 데이터에서 `navigation.items` 데이터를 화면에 출력해보세요.
import db from '~/db.json';

// 중첩된 구조 분해 할당
const {
  navigation: { items },
} = db;

function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
}

const ListItem = ({ item }) => (
  <li>
    <a href={item.link}>{item.text}</a>
  </li>
);

// `list` 매개 변수를 순환해 아이템 리스트를 반환하는 `renderList` 함수를 만들어 활용해봅니다.
const renderList = (list) =>
  list.map((item) => {
    // DOM Script
    // return `<li><a href="${item.link}">${item.text}</a></li>`;

    // React Core API
    // return React.createElement(
    //   'li',
    //   {
    //     key: item.id,
    //   },
    //   React.createElement(
    //     'a',
    //     {
    //       href: item.link,
    //     },
    //     item.text
    //   )
    // );

    // JSX
    // return (
    //   <li key={item.link}>
    //     <a href={item.link}>{item.text}</a>
    //   </li>
    // );

    // using React Component
    return <ListItem key={item.link} item={item} />;
  });

// const renderedList = renderList(items);
// console.log(renderedList);

// 선언된 상태(state)

const ListRendering = () => {
  let items = null;

  const fetchNavigationItems = () => {
    // console.log('clicked button');
    // [ ] XMLHttpRequest, AJAX
    // [x] fetch API
    // [ ] axios

    fetch('/api/navigation')
      .then((response) => response.json())
      .then(({ items: fechedItems }) => {
        items = fechedItems;
        console.log(items);
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="container">
      <h1 className="headline">React 리스트 렌더링 (배열)</h1>

      {/* 배열 리스트 렌더링 */}
      <nav className="globalNavigation">
        {/* 웹 표준을 준수해 비순차 목록을 화면에 출력해봅니다. */}
        {/* renderList(list) 함수를 실행해 리스트 렌더링 처리해봅니다. */}
        <List items={items ?? []} />
      </nav>

      {/* 컴포넌트 상태 관리의 필요성, 데이터 패치  */}
      <button lang="en" type="button" onClick={fetchNavigationItems}>
        load data
      </button>

      {/* 객체 리스트 렌더링 */}
      <dl className="descriptionList">
        {/* 웹 표준을 준수해 설명 목록(description list, DL)을 화면에 출력해봅니다. */}
        {/* 설명 용어(desc. term, DT) - 설명 (definition description, DD) */}
        <dt></dt>
        <dd></dd>
        {/* `db` 객체의 "속성", "값" 쌍을 순환하여 리스트 렌더링 해보세요. */}
        {/* 값의 유형이 객체 또는 배열인 경우, 코드가 화면에 출력되도록 설정합니다. */}
        {/* `isArray`, `isObject` 유틸리티 함수를 만들어 활용하세요. */}
        {/* 코드를 화면에 출력할 때는 <PrettyPrintCode /> 컴포넌트를 활용합니다. (`code` 속성) */}
        <PrettyPrintCode />
      </dl>
    </div>
  );
};

export default ListRendering;
