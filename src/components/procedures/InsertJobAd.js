import {useRef} from "react";

const InsertJobAd = (props) => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    return (
        <>
            <div>
                <div>urgency_passed<input ref={ref1} type="text"/></div>
                <div>description_passed<input ref={ref2} type="text"/></div>
                <div>date_opened_passed<input ref={ref3} type="text"/></div>
                <div>work_location id<input ref={ref4} type="number"/></div>
                <div>work_place id<input ref={ref5} type="number"/></div>
                <div>if_exists_update<input ref={ref6} type="text"/></div>
                <button onClick={submit}>Submit</button>
            </div>
        </>
    )

    function submit() {
        props.insertJobAd(ref1.current['value'],ref2.current['value'],ref3.current['value'],ref4.current['value'],
            ref5.current['value'],ref6.current['value']);
    }
}

export default InsertJobAd;