/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

function renderCard(card) {
  return (
    '<div class="card">\
      <img src="' + card.image.src +'" class="card-img-top" alt="' + card.image.alt + '" />\
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
  return string.replace(/\s+/g, '');
}

