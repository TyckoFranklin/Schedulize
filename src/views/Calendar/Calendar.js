import React, {Component} from 'react';
import "./Calendar.css";
import KeyBar from '../KeyBar/';
import Day from '../Day/';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfDays : props.data.days.length
        }
    }
    render() {
        return (
            <div className="Calendar">
                <div className="calendar_border_top calendar_border"></div>
                <div className="calendar_border_bottom calendar_border"></div>
                <div className="calendar_border_right calendar_border"></div>
                <div className="calendar_border_left calendar_border"></div>
                <h1>{this.state.numberOfDays}</h1>
                <div className="DaysContainer">
                    {this.props.data.days.map((day)=>{
                        return (
                            <Day day={day} numDays={this.state.numberOfDays} ></Day>
                        )
                    })}
                </div>
                <KeyBar/>
            </div>
        );
    }
}

export default Calendar;
