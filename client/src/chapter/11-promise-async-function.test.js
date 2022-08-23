/* eslint-disable jest/expect-expect */

/* utils 모듈에서 fetchBooks를 추출해 비동기 처리 코드를 작성하세요. -------------------------------- */

const { fetchBooks } = require('../utils');

// 데이터 패치 성공 시뮬레이션 코드 예시
test('fetchBooks Promise 테스트', () => {
  return fetchBooks(100)
    .then((response) => response.json())
    .then(({ books }) => {
      expect(books).toHaveLength(8);
    })
    .catch(({ name }) => {
      expect(name).toMatch(/type/i);
    });
});

// 데이터 패치 실패 시뮬레이션 코드 예시
test('fetchBooks Async 함수 테스트', async () => {
  try {
    const response = await fetchBooks(2000, true);
    const json = await response.json();
    expect(json).toHaveLength(7);
  } catch (error) {
    expect(error.message).toMatch(/오류/);
  }
});
