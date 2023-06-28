import {useRef} from "react";

const InsertEmployee = (props) => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    const ref7 = useRef();
    const ref8 = useRef();
    const ref9 = useRef();
    const ref10 = useRef();
    const ref11 = useRef();
    const ref12 = useRef();
    const ref13 = useRef();
    const ref14 = useRef();
    const ref15 = useRef();

    return (
        <>
            <div>
                <div>first_name<input ref={ref1} type="text"/></div>
                <div>last_name<input ref={ref2} type="text"/></div>
                <div>date_of_birth<input ref={ref3} type="text"/></div>
                <div>age<input ref={ref4} type="text"/></div>
                <div>ssn<input ref={ref5} type="text"/></div>
                <div>street<input ref={ref6} type="text"/></div>
                <div>city<input ref={ref7} type="text"/></div>
                <div>postal_code<input ref={ref8} type="text"/></div>
                <div>country<input ref={ref9} type="text"/></div>
                <div>onboarding_offboarding_program_id<input ref={ref10} type="text"/></div>
                <div>work_location_id<input ref={ref11} type="text"/></div>
                <div>suffix<input ref={ref12} type="text"/></div>
                <div>phone<input ref={ref13} type="text"/></div>
                <div>middle_name<input ref={ref14} type="text"/></div>
                <div>email_address<input ref={ref15} type="text"/></div>
                <button onClick={submit}>Submit</button>
            </div>
        </>
    )

    function submit() {
        props.insertEmployee(ref1.current['value'],ref2.current['value'],ref3.current['value'],ref4.current['value'],
            ref5.current['value'],ref6.current['value'],ref7.current['value'],ref8.current['value'],
            ref9.current['value'],ref10.current['value'],ref11.current['value'],ref12.current['value'],
            ref13.current['value'],ref14.current['value'],ref15.current['value']);
    }
}

export default InsertEmployee;