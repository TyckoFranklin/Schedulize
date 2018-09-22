import App from "./../components"
import { connect } from "react-redux";
import {fetchJSONFirst, fetchJSONSecond} from "./../actions/app";


function mapStateToProps(CalendarData) {
    return { CalendarData };
}

export default connect(mapStateToProps, { fetchJSONFirst, fetchJSONSecond })(App);