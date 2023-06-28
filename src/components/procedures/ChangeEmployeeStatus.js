import {useRef} from "react";

const ChangeEmployeeStatus = (props) => {

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    return (
        <>
            <div>
                <div> employee id <input ref={ref1} type="number"/> </div>
                <div>status <input ref={ref2} type="text"/> </div>
                <div>date <input ref={ref3} type="text"/> </div>
                <button onClick={submit}>Submit</button>
            </div>
        </>
    )

    function submit() {
        props.changeEmployeeStatusFun(ref1.current['value'],ref2.current['value'],ref3.current['value']);
    }
}

export default ChangeEmployeeStatus;