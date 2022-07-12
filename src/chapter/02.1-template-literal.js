/* ---------------------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                                     */
/* ---------------------------------------------------------------------------------------- */

/* 렌더링 결과 HTML 코드
<div class="card">
  <img src="react-fundamentals.webp" class="card-img-top" alt="React Fundamentals" />
  <div class="card-body">
    <h5 class="card-title">React 펀드멘탈</h5>
    <p class="card-text">React 애플리케이션 및 라이브러리를 빌드하는 데 필요한 기본 개념을 배웁니다.</p>
    <a href="/react-fundamentals" class="btn btn-primary">React fundamentals</a>      
  </div>    
</div>
*/

/* --------------------------------------------------------------------------------------- */

function renderCard(card) {
  return (
    '<div class="card">\
      <img src="' + card.image.src + '" class="card-img-top" alt="' + card.image.alt + '" />\
      <div class="card-body">\
        <h5 class="card-title">' + card.title + '</h5>\
        <p class="card-text">' + card.description + '</p>\
        <a href="' + card.link.href + '" class="btn btn-primary">' + card.link.text + '</a>\
      </div>\
    </div>\
    '
  );
}

function removeSpaceString(string) {
  return string.replace(/\n|\s+/g, '');
}

/* --------------------------------------------------------------------------------------- */

const cardInfo = {
  title: 'React 펀드멘탈',
  description: 'React 애플리케이션 및 라이브러리를 빌드하는 데 필요한 기본 개념을 배웁니다.',
  image: {
    src: 'react-fundamentals.webp',
    alt: 'React Fundamentals',
  },
  link: {
    href: '/react-fundamentals',
    text: 'React fundamentals',
  },
};

let rendered = removeSpaceString(renderCard(cardInfo));

console.log(rendered);
