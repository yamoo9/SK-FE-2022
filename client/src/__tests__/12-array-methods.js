import { fetchBooks, currencyKR } from '../utils/index.js';

/* 배열 메서드(Array Methods)는 데이터를 다룰 때 자주 사용됩니다. ------------------------------- */

// -------------------------------------------------------------------------------------
// 도서 목록 가져오기
// -------------------------------------------------------------------------------------

async function getBooks(...args) {
  // 모든 도서 목록을 가져온 후, 목록을 순환하여 가격을 "원"화로 변경합니다.
  // 통신에 실패한 경우 오류 메시지를 throw 합니다.

  try {
    const books = await fetchBooks(...args);
    return books.map((book) => ({
      ...book,
      price: currencyKR(book.price),
    }));
  } catch (error) {
    throw new Error(error.message);
  }
}

test('도서 목록 가져오기', async () => {
  // 테스트 코드 작성

  try {
    const books = await getBooks();
    expect(typeof books[0].price).toBe('string');
  } catch (error) {
    expect(error.message).toMatch(/거절/);
  }
});

// -------------------------------------------------------------------------------------
// 제목으로 도서 목록 검색
// -------------------------------------------------------------------------------------

async function searchBooksByTitle(query, ...rest) {
  // Async 함수를 활용해보세요.
  // 모든 도서 목록을 가져온 후, 전달 받은 쿼리와 도서 제목을 포함하는 결과를 반환합니다.
  // 통신에 실패한 경우 오류 메시지를 throw 합니다.

  try {
    const books = await fetchBooks(...rest);
    return books.filter((book) => book.title.includes(query));
  } catch (error) {
    throw new Error(error.message);
  }
}

test('제목으로 도서 목록 검색', async () => {
  // 테스트 코드 작성

  try {
    const findedBooks = await searchBooksByTitle('파랑');
    expect(findedBooks).toHaveLength(3);
  } catch (error) {
    expect(error.message).toMatch(/거절/);
  }
});

// -------------------------------------------------------------------------------------
// 제목 또는 저자로 도서 찾기
// -------------------------------------------------------------------------------------

async function findBook(query, by = 'title') {
  // Promise 또는 Async 함수 중 1가지 방법을 선택합니다.
  // 모든 도서 목록을 가져온 후, 전달 받은 매개변수를 사용해 결과(1개)를 반환합니다.
  // 통신에 실패한 경우 오류 메시지를 throw 합니다.

  try {
    const books = await fetchBooks();
    return books.find((book) => book[by].includes(query));
  } catch (error) {
    throw new Error(error.message);
  }
}

test('제목으로 도서 찾기', async () => {
  // 테스트 코드 작성

  try {
    const findedBook = await findBook('연애');
    expect(findedBook.title.includes('연애')).toBeTruthy();
  } catch (error) {
    expect(error.message).toMatch(/거절/);
  }
});

test('저자로 도서 찾기', async () => {
  // 테스트 코드 작성

  try {
    const findedBook = await findBook('정이담', 'author');
    expect(findedBook?.author.includes('정이담')).toBeTruthy();
  } catch (error) {
    expect(() => error.message).toThrow();
  }
});

// -------------------------------------------------------------------------------------
// 도서 가격 총합 구하기
// -------------------------------------------------------------------------------------

async function calcurateBooksPrice(query, ...rest) {
  // Promise 또는 Async 함수 중 1가지 방법을 선택합니다.
  // searchBooksByTitle() 함수에 전달 받은 매개변수를 사용해 도서 목록을 가져옵니다.
  // 도서 목록을 순회해 가격을 모두 더한 결과 값을 반환합니다.
  // 통신에 실패한 경우 오류 메시지를 throw 합니다.

  try {
    const books = await searchBooksByTitle(query, ...rest);
    return books.reduce((total, book) => total + book.price, 0);
  } catch (error) {
    throw new Error(error.message);
  }
}

test('도서 가격 총합 구하기', async () => {
  // 테스트 코드 작성

  try {
    const total = await calcurateBooksPrice('파랑');
    expect(total).toBeGreaterThan(10000);
    expect(currencyKR(total)).toBe('40,140원');
  } catch (error) {
    expect(() => error.message).toThrow();
  }
});
