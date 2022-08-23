// src/api/books.json 모듈을 불러와 booksApi 이름으로 사용합니다.
// ESM
// 참고: https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules/
import booksApi from '../api/books.json' assert { type: 'json' };

// Node.js
// const booksApi = require('../api/books.json');
// exports.fetchBooks = fetchBooks;

// export const fetchBooks = (timeout = 1000, shouldReject = false) => {
export const fetchBooks = (timeout = 1000, shouldReject = false) => {
  // Promise 객체를 반환합니다.
  return new Promise((resolve, reject) => {
    // timeout 초가 흐른 뒤, 타이머가 작동하도록 설정합니다.
    setTimeout(() => {
      if (!shouldReject) {
        // booksApi.books 값을 전송합니다.
        resolve(booksApi.books);
      } else {
        // shouldReject 값에 따라 오류 객체를 전송하거나,
        reject({
          name: 'UNKNOWN_ERROR',
          message: '알 수 없는 오류가 발생했습니다.',
        });
      }
    }, timeout);
  });
};
