import React, { Component } from 'react';
import debounce from 'lodash.debounce';

class BottomScrollListener extends Component {
  constructor(props) {
    super(props);
    this.handleOnScroll = debounce(
      this.handleOnScroll.bind(this),
      props.debounce,
      { trailing: true }
    );
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleOnScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleOnScroll);
  }

  handleOnScroll() {
    const scrollNode = document.scrollingElement || document.documentElement;

    if (
      scrollNode.scrollHeight - this.props.offset <=
      scrollNode.scrollTop + window.innerHeight
    ) {
      this.props.onBottom();
    }
  }

  render() {
    return !this.props.children ? null : <div>{this.props.children}</div>;
  }
}

BottomScrollListener.defaultProps = {
  debounce: 200,
  offset: 0,
  children: null
};

export default BottomScrollListener;
