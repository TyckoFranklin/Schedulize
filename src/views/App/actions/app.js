import CalendarData1 from '../../../store/data';
import CalendarData2 from '../../../store/data1';

export const FETCH_FIRST = "fetch_first";
export const FETCH_SECOND = "fetch_second";


export const fetchJSONFirst = () => {
    return {
        type: FETCH_FIRST,
        payload: CalendarData1,
    };
}

export const fetchJSONSecond = () => {
    return {
        type: FETCH_SECOND,
        payload: CalendarData2,
    };
}