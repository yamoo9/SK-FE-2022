/* utils 모듈에서 fetchBooks를 추출해 테스트 코드를 작성하세요. -------------------------------- */

import { fetchBooks } from '../utils/fetchBooks.js';
import booksData from '../api/books.json';

test('fetchBooks 프로미스 테스트', () => {
  // Promise를 사용해 fetchBooks()로 부터 가져온 데이터를 테스트 합니다.
  // 통신에 실패한 경우, 출력된 오류 메시지를 테스트 합니다.

  return fetchBooks()
    .then((data) => expect(data).toStrictEqual(booksData.books))
    .catch((error) => expect(error.message).toMatch(/거절/));
});

test('fetchBooks 비동기 함수 테스트', async () => {
  // Async 함수를 사용해 fetchBooks()로 부터 가져온 데이터를 테스트 합니다.
  // 통신에 실패한 경우, 오류 메시지를 테스트 합니다.

  try {
    const data = await fetchBooks(1000, true);
    expect(data).toStrictEqual(booksData.books);
  } catch (error) {
    expect(error.message).toMatch(/거절/);
  }
});
