import { Component } from 'react';

class Input extends Component {
  render() {

    const {type, text, className, onChange} = this.props;
    const objType = (type) ? type : 'text';
    const objClass = (className) ? className : 'default-input';

    return ( 
      <div>
        <input placeholder={text} type={objType} className={objClass} onChange={onChange} />
      </div>
    );

  }
}

export default Input;
