import { Component } from 'react';
import './Pager.css';
import Button from 'components/Button/Button';

class Pager extends Component {
  render() {
    const { pages, index, width, offset } = this.props;
    const widthPx = (width) ? `${width}px` : 'auto';
    const pagesInt = parseInt(pages);
    const numbers = [...Array(pagesInt).keys()];
    const pageOfset = (offset) ? parseInt(offset) : 2;
    const btnClass = 'pager-button';
    const selClass = 'pager-focused-button';
    
    const getButton = ({ onClick, current, widthPx, btClass, text, disabled }) => {
      return <Button onClick={e => onClick(current)} index={current} width={widthPx} disabled={disabled} className={btClass} text={(text) ? text : current} />
    }

    const buttonClickHandler = (v) => {
      console.log('onclick called from parent handler!');
    }

    const getButtonList = () => {
      let skipPages = false;

      return numbers.map((number) => {
        let current = number+1;
        let diff = index-current;
        let posDiff = (diff < 0) ? (diff) * -1 : (diff);
        let btClass = (number === parseInt(index)) ? selClass : btnClass;

        // Render buttons based on thier offsit
        if ( (posDiff <= pageOfset) || (current === numbers.length) ) {
          return getButton({ onClick: (e)=>{ console.log(`button clicked from pager.js ${e}`);}, current, widthPx, btClass, disabled:'off' });
        } else if (!skipPages) {
          // return a button which represents hidden buttons.
          // Add a button that ilustrates skipping of pages above offsit value..
          skipPages = true;
          return getButton({ onClick: (e)=>{ console.log(`collupsed button clicked from pager.js ${e}`);}, current, widthPx, btClass, disabled:'on', text:'...' });
        } else {
           // Skip everything in between (current page + page offsit) and final page.
          return null;
        }
        
      });
    }
    
    const getPagerButtons = (index) => {
      const buttonList = getButtonList();

      return (
        <div className='pager-button-wraper'>
          <Button width={widthPx} className={btnClass} onClick={buttonClickHandler} text='' icon='Left' />
          {buttonList}
          <Button width={widthPx} className={btnClass} onClick={buttonClickHandler} text='' icon='Right' />
        </div>
      );
    }
    
    
    return (
      <div className='pager-wraper'>
        {getPagerButtons(index)}
      </div>
    );
  }
}

export default Pager;
