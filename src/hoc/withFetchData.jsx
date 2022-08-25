import React from 'react';
import { Spinner } from 'components';

export function withFetchData(Component, endpoint) {
  class EhnacedComponent extends React.Component {
    state = {
      loading: true,
      error: null,
      data: null,
    };

    render() {
      const { loading, error, data } = this.state;

      if (loading) {
        return <Spinner height={60} />;
      }

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

    componentDidMount() {
      this.fetchData();
    }
  }

  return EhnacedComponent;
}
