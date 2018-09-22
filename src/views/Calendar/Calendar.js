import React, {Component} from 'react';
import "./Calendar.css";
import KeyBar from '../KeyBar/';
import Day from '../Day/';
import {fetchJSONFirst, fetchJSONSecond} from "../App/actions/app";

class Calendar extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        // this.state = {
        //     numberOfDays : props.CalendarData ?
        //         props.CalendarData.length ?
        //             props.data.days.length
        //             :0
        //         :0,
        // }

        // this.handleLeftClick = this.handleLeftClick.bind(this);
        // this.handleRightClick = this.handleRightClick.bind(this);
    }

    // handleLeftClick(){
    //     this.props.dispatch(fetchJSONSecond());
    // }
    //
    // handleRightClick(){
    //     this.props.dispatch(fetchJSONFirst());
    // }
    render() {
        console.log("Calendar");
        console.log(this.props);
        if(this.props.CalendarData && this.props.CalendarData.days) {
            return (
                <div className="Calendar">
                    <div className="calendar_border_top calendar_border"></div>
                    <div className="calendar_border_bottom calendar_border"></div>
                    <div className="calendar_border_right calendar_border" onClick={this.props.handleRightClick}></div>
                    <div className="calendar_border_left calendar_border" onClick={this.props.handleLeftClick}></div>
                    <h1>{this.props.CalendarData.days.length}</h1>
                    <div className="DaysContainer">
                        {this.props.CalendarData.days.map((day) => {
                            return (
                                <Day day={day} numDays={this.props.CalendarData.days.length}></Day>
                            )
                        })}
                    </div>
                    <KeyBar/>
                </div>
            );
        } else {
            return (
                <div className="Calendar">
                    <div className="calendar_border_top calendar_border"></div>
                    <div className="calendar_border_bottom calendar_border"></div>
                    <div className="calendar_border_right calendar_border"></div>
                    <div className="calendar_border_left calendar_border"></div>
                    <h1>{0}</h1>
                    <div className="DaysContainer">

                    </div>
                    <KeyBar/>
                </div>
            );
        }
    }
}

export default Calendar;
