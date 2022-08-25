import React from 'react';
import { Spinner } from 'components';

// return ehancedComponent;
// stateful logic
// state, side effects
// return class component
export function withFetchData(Component, endpoint) {
  class EhnacedComponent extends React.Component {
    // class field
    // public/private instance, static members
    state = {
      loading: true,
      error: null,
      data: null,
    };

    render() {
      const { loading, error, data } = this.state;

      // 상태 loading 값이 true인 경우
      if (loading) {
        return <Spinner height={60} />;
      }

      // 오류가 발생한 경우
      if (error) {
        return <div role="alert">{error.message}</div>;
      }

      return <Component data={data}>{this.props.children}</Component>;
    }

    async fetchData() {
      try {
        const json = await fetch(endpoint).then((res) => res.json());
        this.setState({
          data: json,
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }

    // side effects
    // request, response
    componentDidMount() {
      this.fetchData();
    }
  }

  return EhnacedComponent;
}
