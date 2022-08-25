import axios from 'axios';
import { css } from '@emotion/css';
import { Component } from 'react';
import { Spinner } from './Spinner';

// stateful component
// container component
// clas component

// class component `life cycle`
// ------------------------------------
// constructor
// static getDerivedStateFromProps
// static getDerivedStateFromError
// shouldComponentUpdate
// render
// ------------------------------------
// getSnapshotBeforeUpdate
// componentDidMount ← fetch request
// componentDidUpdate
// componentWillUnmount
// componentDidCatch

/* component ---------------------------------------------------------------- */

class RandomUser extends Component {
  constructor(props) {
    super(props);

    // 클래스 컴포넌트 : 상태 관리
    this.state = {
      loading: true,
      error: null,
      user: null,
    };
  }

  render() {
    // 조건부 렌더링
    const { user, error, loading } = this.state;

    // 상태 loading 값이 true인 경우
    if (loading) {
      return <Spinner height={60} />;
    }

    // 오류가 발생한 경우
    if (error) {
      return <div role="alert">{error.message}</div>;
    }

    // 그렇지 않은 경우
    return (
      <figure className={elementStyle}>
        <img src={user.photo} alt="" />
        <figcaption>{user.email}</figcaption>
      </figure>
    );
  }

  async fetchRandomUser() {
    // console.log('call request');
    try {
      const {
        data: { results },
      } = await axios.get(
        '//randomuser.me/api/?inc=id,email,gender,name,nat,picture'
      );
      const randomUser = results[0];
      this.setState({
        user: {
          name: `${randomUser.name.first} ${randomUser.name.last}`,
          email: randomUser.email,
          gender: randomUser.gender,
          nat: randomUser.nat,
          photo: randomUser.picture.large,
        },
      });
    } catch (error) {
      this.setState({
        error /* { name, message, stack } */,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  componentDidMount() {
    // 명령형 프로그래밍 가능
    // 사이드 이펙트 (부수효과)
    // React가 하는 일이 아닌 것들
    // 1. 비동기 요청/처리
    this.fetchRandomUser();
    // 2. DOM 노드 접근/조작
    // 3. 이벤트 구독/취소
    // 4. 오류 경계 (오류 감지 및 처리)
  }
}

export default RandomUser;

/* component styles --------------------------------------------------------- */

const elementStyle = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 8px;
`;
