import { Component } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import './Button.css';

class Button extends Component {
  render() {
    const { icon, text, width, className, onClick } = this.props;

    const iconElement = (icon) ? (icon === 'Left') ? <FaChevronLeft /> : <FaChevronRight /> : ''; 
    // const disable = (disabled) ? 'on' : 'off';

    return <button width={width} onClick={onClick} className={className} >{iconElement} {text}</button>;
  }
}

export default Button;
