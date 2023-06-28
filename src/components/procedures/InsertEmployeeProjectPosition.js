import {useRef} from "react";

const InsertEmployeeProjectPosition = (props) => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    return (
        <>
            <div>
                <div>employee id<input ref={ref1} type="number"/></div>
                <div>project id<input ref={ref2} type="number"/></div>
                <div>project_position id<input ref={ref3} type="number"/></div>
                <div>reports_to_project_hierarchy id<input ref={ref4} type="number"/></div>
                <div>from_date_project<input ref={ref5} type="text"/></div>
                <div>if_exists_update<input ref={ref6} type="text"/></div>
                <button onClick={submit}>Submit</button>
            </div>
        </>
    )

    function submit() {
        props.insertEmployeeProjectPosition(ref1.current['value'],ref2.current['value'],ref3.current['value'],ref4.current['value'],
            ref5.current['value'],ref6.current['value']);
    }
}

export default InsertEmployeeProjectPosition;