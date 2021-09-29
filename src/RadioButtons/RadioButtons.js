import { Component } from 'react';
import './RadioButtons.css';


class RadioButtons extends Component {
  render() {
    const { components } = this.props;
    const compArr = [];
    

    const guiChangeHandler = (e) => {
      compArr.forEach((elId) => {
        const _comp = document.getElementById(elId);
        _comp.parentElement.style = '';
      });
      e.parentElement.style = "background: #1193ff;color: white;";
    }

    const getComponents = () => {
      if (!components) return <div>Nothing to render, please add components.</div>;

      
      return components.map((comp) => {
       let id = Math.random() * 1000; 
       compArr.push(id);
       return ( 
        <div className='radio-button'>
          <input onClick={e => guiChangeHandler(e.target)} type="radio" name="sizeBy" value={comp} id={id} checked="checked" />
          <h4>{comp}</h4>
        </div>
        );
      }
      );
    }

    const radioButtons = getComponents();

    return (
      <div className='radio-button-wraper'>
        {radioButtons}
      </div>
    );
  }
}

export default RadioButtons;
