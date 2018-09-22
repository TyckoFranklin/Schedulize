import React, { Component } from 'react';
import Calendar from '../../Calendar/';
import CalendarData from '../../../store/data';
import '../App.css';
import {fetchJSONFirst, fetchJSONSecond} from "../actions/app";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this)
        this.handleLeftClick = this.handleLeftClick.bind(this)
        this.handleRightClick = this.handleRightClick.bind(this)
    }
    componentDidMount() {
        // this.props.fetchJSONFirst();
    }

    handleClick(){
        this.props.fetchJSONSecond();
    }

    handleLeftClick(){
        this.props.fetchJSONSecond();
    }

    handleRightClick(){
        this.props.fetchJSONFirst();
    }

    render() {
      console.log("app props");
      console.log(this);
          return (
              <div className="App">
                  <header className="App-header">
                      <h1 className="App-title" onClick={this.handleClick}>Tycko's Fall Schedule</h1>
                  </header>
                  <Calendar
                      CalendarData={this.props.CalendarData}
                      handleRightClick = {this.handleRightClick}
                      handleLeftClick =  {this.handleLeftClick}

                  />
              </div>
          );
  }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { CalendarData: state.CalendarData };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchJSONFirst, fetchJSONSecond }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
