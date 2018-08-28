import React, {Component} from 'react';
import "./KeyBar.css";


class KeyBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="KeyBar">
                <div className="KeyBar_Key KeyBar_Uni"><div className="KeyBar_center">Key:</div></div>
                <div className="KeyBar_Work KeyBar_Uni"><div className="KeyBar_center">Work</div></div>
                <div className="KeyBar_School KeyBar_Uni"><div className="KeyBar_center">School</div></div>
                <div className="KeyBar_Available KeyBar_Uni"><div className="KeyBar_center">Available</div></div>
            </div>
        );
    }
}

export default KeyBar;
