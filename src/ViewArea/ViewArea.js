import React, {Component} from 'react';
import "./ViewArea.css";


class ViewArea extends Component {
    render() {
        return (
            <div className="ViewArea">
                <div className="viewArea_border_top viewArea_border"></div>
                <div className="viewArea_border_bottom viewArea_border"></div>
                <div className="viewArea_border_right viewArea_border"></div>
                <div className="viewArea_border_left viewArea_border"></div>
                <h1>This is a test of the system</h1>
            </div>
        );
    }
}

export default ViewArea;
