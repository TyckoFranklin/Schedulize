import React, { Component } from 'react';
import Calendar from '../../Calendar/';
import CalendarData from '../../../store/data';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tycko's Fall Schedule</h1>
        </header>
        <Calendar data={CalendarData}/>
      </div>
    );
  }
}

export default App;
