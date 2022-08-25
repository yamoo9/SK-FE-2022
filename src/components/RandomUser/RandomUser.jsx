import { css } from '@emotion/css';
import { Component } from 'react';
import { Spinner } from './Spinner';

// component
class RandomUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      user: null,
    };
  }

  render() {
    // 조건부 렌더링
    // 상태 loading 값이 true인 경우
    if (this.state.loading) {
      return <Spinner />;
    }

    // 그렇지 않은 경우
    return <figure className={elementStyle}>{this.props.children}</figure>;
  }
}

export default RandomUser;

// component styles

const elementStyle = css``;
