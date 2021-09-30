import { Component } from 'react';
import MediaButtons from 'MediaButtons/MediaButtons';
import LoginForm from 'LoginForm/LoginForm';
import Pager from 'Pager/Pager';
import RadioButtons from 'RadioButtons/RadioButtons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-component">
          <header className="App-header">
            Media Buttons Component (Example)
          </header>
          <div className="App-content">
            <MediaButtons panelClassName='default-panel-wraper' />
          </div>
        </div>

        <div className="App-component App-green-bg">
          <header className="App-header">Login form component (TODO)</header>
          <div className="App-content">
            <LoginForm />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Pager component (TODO)</header>
          <div className="App-content">
            <Pager pages={16} offset={4} index={1} />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Radio Buttons component (TODO)</header>
          <div className="App-content">
            <RadioButtons components={ ["Apple","Pear","Orange"] } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
