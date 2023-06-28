import {useRef} from "react";

const ApplicationSubmission = (props) => {
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
    const ref16 = useRef();
    const ref17 = useRef();
    const ref18 = useRef();

    return (
        <>
            <div>
                <div>application_description<input ref={ref1} type="text"/></div>
                <div>attached_document_subject<input ref={ref2} type="text"/></div>
                <div>attached_document_type<input ref={ref3} type="text"/></div>
                <div>attached_document_file_type<input ref={ref4} type="text"/></div>
                <div>attached_document_date<input ref={ref5} type="text"/></div>
                <div>attached_document_content<input ref={ref6} type="text"/></div>
                <div>applicant_ssn<input ref={ref7} type="text"/></div>
                <div>applicant_name<input ref={ref8} type="text"/></div>
                <div>applicant_surname<input ref={ref9} type="text"/></div>
                <div>applicant_date_of_birth<input ref={ref10} type="text"/></div>
                <div>applicant_email<input ref={ref11} type="text"/></div>
                <div>applicant_phone<input ref={ref12} type="text"/></div>
                <div>applicant_city<input ref={ref13} type="text"/></div>
                <div>applicant_country<input ref={ref14} type="text"/></div>
                <div>applicant_highest_education<input ref={ref15} type="text"/></div>
                <div>applicant_work_experience<input ref={ref16} type="text"/></div>
                <div>applied_for_job_ad_id<input ref={ref17} type="text"/></div>
                <button onClick={submit}>Submit</button>
            </div>
        </>
    )

    function submit() {
        props.applicationSubmission(ref1.current['value'],ref2.current['value'],ref3.current['value'],ref4.current['value'],
            ref5.current['value'],ref6.current['value'],
            ref7.current['value'],ref8.current['value'],ref9.current['value'],ref10.current['value'],
            ref11.current['value'],ref12.current['value'],
            ref13.current['value'],ref14.current['value'],ref15.current['value'],ref16.current['value'],
            ref17.current['value']);
    }
}

export default ApplicationSubmission;