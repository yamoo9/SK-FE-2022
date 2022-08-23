/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

const truncateText = (text, limit = 100) => {
  return `${text.slice(0, limit).trim()}...`;
};

// Jest Test Runner
test('truncateText 함수', () => {
  let length = 34;

  // expect(전달값).매처함수(기대값);

  expect(
    truncateText(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos provident autem non aliquid amet ipsam molestias quaerat nobis, quas aspernatur facere eius itaque tempore consectetur, nihil beatae, saepe earum debitis facilis! A quo, temporibus similique vel, voluptas illo distinctio assumenda nihil minima et eius dignissimos beatae? Fuga, delectus quos odio debitis possimus inventore magni, veniam unde dolores, alias provident atque.',
      length
    )
  ).toHaveLength(length + 3);

  expect(
    truncateText(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat voluptas molestiae sint aut ut iste officia quibusdam reiciendis animi maiores suscipit dicta non sapiente, a harum labore architecto beatae doloremque magni! Sed, facilis! A illo sunt amet voluptatibus! Nihil nesciunt ea corrupti sunt tempore consequuntur enim quidem sit distinctio nobis. Expedita recusandae deleniti ad alias debitis rem voluptate sequi cupiditate vitae officia eos officiis aspernatur, dolore dignissimos eligendi, ratione excepturi culpa ut, similique id enim tempore quisquam. Beatae magni odit sit, blanditiis itaque saepe. Eius esse ea dolorum facere delectus harum sunt recusandae impedit nemo hic sequi porro nesciunt adipisci repudiandae, officiis dignissimos! Perspiciatis exercitationem pariatur laborum voluptas ipsa molestias repellat eaque magnam similique, porro aut facilis id a necessitatibus quasi vel nulla iure, maiores consequatur vitae, quos sint mollitia accusantium. Odit repellat, commodi minima provident ab officiis recusandae quas saepe molestiae, dolorem debitis blanditiis nemo nihil praesentium facilis voluptatem quibusdam labore veritatis odio vel. Eum, dolor voluptates. Ab explicabo, recusandae quas totam quos magni perferendis suscipit provident sint labore cumque fugiat ipsam obcaecati minus! Explicabo, consequatur suscipit facilis fugit, possimus illum, maiores sit repellat ducimus omnis dolor eveniet vel sapiente quaerat? Nemo sed nihil ipsam eveniet aliquam eaque?'
    )
  ).toHaveLength(100 + 3);
});
