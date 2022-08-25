import { Component } from 'react';
import { css } from '@emotion/css';
import { withFetchData } from 'hoc/withFetchData';

/* component ---------------------------------------------------------------- */

class RandomUser extends Component {
  render() {
    const {
      data: { results },
    } = this.props;

    const user = {
      name: `${results[0].name.first} ${results[0].name.last}`,
      email: results[0].email,
      gender: results[0].gender,
      nat: results[0].nat,
      photo: results[0].picture.large,
    };

    return (
      <figure className={elementStyle}>
        <img src={user.photo} alt="" />
        <figcaption>{user.email}</figcaption>
      </figure>
    );
  }
}

// export default HOC
export default withFetchData(
  RandomUser,
  'https://randomuser.me/api/?inc=id,email,gender,name,nat,picture'
);

/* component styles --------------------------------------------------------- */

const elementStyle = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 8px;
`;
