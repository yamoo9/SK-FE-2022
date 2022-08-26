import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: [], hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.logErrorToMyService(error, errorInfo);
    // this.setState(
    //   ({ info }, props) => {
    //     return {
    //       error,
    //       info: [...info, errorInfo],
    //     };
    //   },
    //   () => {
    //     console.log(this.state.error); // error {}
    //   }
    // );

    // console.log(this.state.error); // null
  }

  logErrorToMyService(error, info) {
    console.log(error.message);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
