import { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import './MediaButtons.css';

class MediaButtons extends Component {
  render() {
    const btnClass = 'pager-button';
    const { panelClassName } = this.props;

    const pClass = (panelClassName) ? panelClassName : 'panel-wraper';

    return (
      <Panel backgroundColor="blue" className={pClass}>
        <Button text="Rewind" className={btnClass} onClick={() => {}} />
        <Button text="Fast Forward" className={btnClass} onClick={() => {}} />
        <Button text="Play" className={btnClass} onClick={() => {}} color="green" size="large" />
        <Button text="Stop" className={btnClass} onClick={() => {}} color="red" size="large" />
      </Panel>
    );
  }
}

export default MediaButtons;
