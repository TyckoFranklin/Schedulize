import React, {Component} from 'react';
import "./Day.css";


class Day extends Component {

    constructor(props) {
        super(props);
        this.minutesInDay = 24*60;
        console.log(props.day);
        this.state = {
        }
    }

    calculateTimeFromMidnight(time){
        const timeSplit = time.split(":");
        let hours, minutes;
        if(timeSplit.length >= 2){
            hours = parseInt(timeSplit[0]);
            minutes = parseInt(timeSplit[1]);
        } else {
            hours = parseInt(time);
            minutes = 0;
        }
        return hours * 60 + minutes;
    }

    capitalizeFirstLetter(word){
        if(word.length > 1){
            return word[0].toUpperCase() + word.slice(1);
        } else if (word.length == 1){
            word[0].toUpperCase()
        } else {
            return word;
        }

    }

    createPeriod({start, end, description}){
        console.log(start, end, description);
        const startTime = this.calculateTimeFromMidnight(start);
        const startPercentage = startTime / this.minutesInDay * 100;
        const endTime = this.calculateTimeFromMidnight(end);
        const endPercentage = endTime / this.minutesInDay * 100;
        const heightPercentage = endPercentage - startPercentage;
        return(
            <div
                className={description + "Period daySinglePeriod"}
                style={{height: heightPercentage + "%", top: startPercentage + "%"}}
            >
                <div className={"periodStartTime"}>{start}</div>
                {/*<div className={"periodDescription"}>{this.capitalizeFirstLetter(description)}</div>*/}
                <div className={"periodEndTime"}>{end}</div>
            </div>
        )
    }

    render() {
        return (
            <div className="Day" style={{width : (100 / this.props.numDays - 2) + "%"}} >
                <div className="dayTitle" >{this.props.day.day}</div>
                <div className="dayPeriods" >
                    {this.props.day.periods.map((period)=>{return this.createPeriod(period)})}
                </div>
            </div>
        );
    }
}

export default Day;
