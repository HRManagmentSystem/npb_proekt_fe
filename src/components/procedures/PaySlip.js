import {useRef} from "react";

const PaySlip = (props) => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();

    return (
        <>
            <div>
                <div>employee id <input ref={ref1} type="number"/> </div>
                <div>month<input ref={ref2} type="number"/> </div>
                <div>year<input ref={ref3} type="number"/> </div>
                <div>bonus<input ref={ref4} type="number"/> </div>
                <button onClick={submit}>Submit</button>
            </div>
        </>
    )

    function submit() {
        props.paySlip(ref1.current['value'],ref2.current['value'],ref3.current['value'],ref4.current['value']);
    }
}

export default PaySlip;