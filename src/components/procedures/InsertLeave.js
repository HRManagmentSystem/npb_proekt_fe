import {useRef} from "react";

const InsertLeave = (props) => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();

    return (
        <>
            <div>
                <div> employee id <input ref={ref1} type="number"/> </div>
                <div>leave type <input ref={ref2} type="number"/> </div>
                <div>reason leave <input ref={ref3} type="number"/> </div>
                <div>date start <input ref={ref4} type="text"/> </div>
                <div>date end<input ref={ref5} type="text"/> </div>
                <button onClick={submit}>Submit</button>
            </div>
        </>
    )

    function submit() {
        props.insertLeave(ref1.current['value'],ref2.current['value'],ref3.current['value'],ref4.current['value'],ref5.current['value']);
    }
}

export default InsertLeave;