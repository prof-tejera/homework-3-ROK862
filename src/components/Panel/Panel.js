import React, { Component } from 'react';

class Panel extends Component {
  render() {
    const { className } = this.props;

    const cName = (className) ? className : 'panel-wraper';

    return <div className={cName}>{this.props.children}</div>;
  }
}

export default Panel;
