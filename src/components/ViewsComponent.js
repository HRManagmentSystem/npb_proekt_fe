import {useState} from "react";
import axios from "axios";
import {PulseLoader} from "react-spinners";
import DepartmentProjects from "./views/DepartmentProjects";
import EmployeeAddressInformation from "./views/EmployeeAddressInformation";
import EmployeeEmploymentView from "./views/EmployeeEmploymentView";
import EmployeeEquipmentView from "./views/EmployeeEquipmentView";
import EmployeeLeaveInformation from "./views/EmployeeLeaveInformation";
import EmployeeLeaveView from "./views/EmployeeLeaveView";
import EmployeeMostRecentPaymentView from "./views/EmployeeMostRecentPaymentView";
import EmployeeOnboardingOffboardingPhase from "./views/EmployeeOnboardingOffboardingPhase";
import EmployeePeerFeedback from "./views/EmployeePeerFeedback";
import EmployeeProjectView from "./views/EmployeeProjectView";
import JobAds from "./views/JobAds";
import NewsInCompany from "./views/NewsInCompany";
import ChangeEmployeeStatus from "./procedures/ChangeEmployeeStatus";
import InsertLeave from "./procedures/InsertLeave";
import PaySlip from "./procedures/PaySlip";
import InsertEmployee from "./procedures/InsertEmployee";
import InsertEmployeeProjectPosition from "./procedures/InsertEmployeeProjectPosition";
import InsertJobAd from "./procedures/InsertJobAd";
import insertJobAd from "./procedures/InsertJobAd";
import ApplicationSubmission from "./procedures/ApplicationSubmission";
import app from "../App";

const ViewsComponent = (props) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [type, setType] = useState(0);
    const [err, setErr] = useState(null);

    return (
        <>
            <div>
                <ul>
                    <li>
                        <button onClick={departmentProjects}>department_projects</button>
                    </li>
                    <li>
                        <button onClick={employeeAddressInformation}>employee_address_information</button>
                    </li>
                    <li>
                        <button onClick={employeeEmploymentView}>employee_employment_view</button>
                    </li>
                    <li>
                        <button onClick={employeeEquipmentView}>employee_equipment_view</button>
                    </li>
                    <li>
                        <button onClick={employeeLeaveInformation}>employee_leave_information</button>
                    </li>
                    <li>
                        <button onClick={employeeLeaveView}>employee_leave_view</button>
                    </li>
                    <li>
                        <button onClick={employeeMostRecentPaymentView}>employee_most_recent_payment_view</button>
                    </li>
                    <li>
                        <button onClick={employeeOnboardingOffboardingPhase}>employee_in_onboarding_offboarding_phase</button>
                    </li>
                    <li>
                        <button onClick={employeePeerFeedback}>employee_peer_feedback_view</button>
                    </li>
                    <li>
                        <button onClick={employeeProjectView}>employee_project_view</button>
                    </li>
                    <li>
                        <button onClick={jobAds}>job_ads</button>
                    </li>
                    <li>
                        <button onClick={newsInCompany}>news_in_company</button>
                    </li>
                </ul>
                <ul>
                    <li>
                        <button onClick={() => setType(21)}>change employee status</button>
                    </li>
                    <li>
                        <button onClick={() => setType(22)}>insert leave</button>
                    </li>
                    <li>
                        <button onClick={() => setType(23)}>pay slip</button>
                    </li>
                    <li>
                        <button onClick={() => setType(24)}>insert employee</button>
                    </li>
                    <li>
                        <button onClick={() => setType(25)}>insert employee project position</button>
                    </li>
                    <li>
                        <button onClick={() => setType(26)}>insert job ad</button>
                    </li>
                    <li>
                        <button onClick={() => setType(27)}>application submission</button>
                    </li>
                </ul>
            </div>
            <div>
                {
                    loading && <h3>Loading <PulseLoader/></h3>
                }
                {
                    !loading && type === 1 && <DepartmentProjects items={data}/>
                }
                {
                    !loading && type === 2 && <EmployeeAddressInformation items={data}/>
                }
                {
                    !loading && type === 3 && <EmployeeEmploymentView items={data} employeeEmploymentViewFilter={employeeEmploymentViewFilter}/>
                }
                {
                    !loading && type === 4 && <EmployeeEquipmentView items={data} filterEquipmentByIdandEquipmentId={filterEquipmentByIdandEquipmentId}/>
                }
                {
                    !loading && type === 5 && <EmployeeLeaveInformation items={data} employeeLeaveInformationFilter={employeeLeaveInformationFilter} />
                }
                {
                    !loading && type === 6 && <EmployeeLeaveView items={data} employeeLeaveViewFilter={employeeLeaveViewFilter}/>
                }
                {
                    !loading && type === 7 && <EmployeeMostRecentPaymentView items={data} findByEmployeeIdandMostResentPaymentChangeDate={findByEmployeeIdandMostResentPaymentChangeDate}/>
                }
                {
                    !loading && type === 8 && <EmployeeOnboardingOffboardingPhase items={data} employeeOnboardingOffboardingPhaseFilter={employeeOnboardingOffboardingPhaseFilter} />
                }
                {
                    !loading && type === 9 && <EmployeePeerFeedback items={data} employeePeerFeedbackFilterByIds={employeePeerFeedbackFilterByIds} />
                }
                {
                    !loading && type === 10 && <EmployeeProjectView items={data} employeeProjectViewFilter={employeeProjectViewFilter}/>
                }
                {
                    !loading && type === 11 && <JobAds items={data} filterJobAdsByWorkLocationId={filterJobAdsByWorkLocationId}/>
                }
                {
                    !loading && type === 12 && <NewsInCompany items={data} filterNewsByEmployeeIdAndGroupId={filterNewsByEmployeeIdAndGroupId} />
                }
                {
                    type === 21 && <ChangeEmployeeStatus changeEmployeeStatusFun={changeEmployeeStatusFun}/>
                }
                {
                    type === 22 && <InsertLeave insertLeave={insertLeave}/>
                }
                {
                    type === 23 && <PaySlip paySlip={paySlip} />
                }
                {
                    type === 24 && <InsertEmployee insertEmployee={insertEmployee} />
                }
                {
                    type === 25 && <InsertEmployeeProjectPosition insertEmployeeProjectPosition={insertEmployeeProjectPosition} />
                }
                {
                    type === 26 && <InsertJobAd insertJobAd={insertJobAd} />
                }
                {
                    type === 27 && <ApplicationSubmission applicationSubmission={applicationSubmission} />
                }
                {
                    !loading && err && <div style={{color: 'red'}}>{err}</div>
                }
            </div>
        </>
    )

    function departmentProjects() {
        setLoading(true);
        axios.get("http://localhost:8080/api/departmentProjects/first", {
            params: {
                n: 50,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(1);
        }).catch(error$ => {
        })
    }

    function employeeAddressInformation() {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeAddressInformation/first", {
            params: {
                n: 50,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(2);
        }).catch(error$ => {
        })
    }

    function employeeEmploymentView() {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeEmploymentView/first", {
            params: {
                n: 50,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(3);
        }).catch(error$ => {
        })
    }


    function employeeEquipmentView() {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeEquipmentView/first", {
            params: {
                n: 50,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(4);
        }).catch(error$ => {
        })
    }

    function employeeLeaveInformation() {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeLeaveInformation/first", {
            params: {
                n: 50,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(5);
        }).catch(error$ => {
        })
    }

    function employeeLeaveView() {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeLeaveView/first", {
            params: {
                n: 50,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(6);
        }).catch(error$ => {
        })
    }

    function employeeMostRecentPaymentView() {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeMostRecentPaymentView/first", {
            params: {
                n: 300,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(7);
        }).catch(error$ => {
        })
    }
    function employeeOnboardingOffboardingPhase() {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeOnboardingOffboardingPhase/first", {
            params: {
                n: 50,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(8);
        }).catch(error$ => {
        })
    }

    function employeePeerFeedback() {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeePeerFeedback/first", {
            params: {
                n: 50,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(9);
        }).catch(error$ => {
        })
    }

    function employeeProjectView() {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeProjectView/first", {
            params: {
                n: 200,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(10);
        }).catch(error$ => {
        })
    }

    function jobAds() {
        setLoading(true);
        axios.get("http://localhost:8080/api/jobs/first", {
            params: {
                n: 100,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(11);
        }).catch(error$ => {
        })
    }

    function newsInCompany() {
        setLoading(true);
        axios.get("http://localhost:8080/api/newsInCompany/first", {
            params: {
                n: 100,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(12);
        }).catch(error$ => {
        })
    }

    function employeeEmploymentViewFilter(id) {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeEmploymentView/findById", {
            params: {
                id: +id,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(3);
        }).catch(error$ => {
        })
    }

    function employeeOnboardingOffboardingPhaseFilter(id) {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeOnboardingOffboardingPhase/findById", {
            params: {
                id: +id,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(8);
        }).catch(error$ => {
        })
    }

    function findByEmployeeIdandMostResentPaymentChangeDate(id, date) {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeMostRecentPaymentView/findById", {
            params: {
                id: +id,
                date: date
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(7);
        }).catch(error$ => {
        })
    }

    function employeePeerFeedbackFilterByIds(id, idQ, idA){
        setLoading(true);
        axios.get("http://localhost:8080/api/employeePeerFeedback/filterById", {
            params: {
                id: +id,
                idQ: +idQ,
                idA: +idA
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(9);
        }).catch(error$ => {
        })
    }

    function filterJobAdsByWorkLocationId(id){
        setLoading(true);
        axios.get("http://localhost:8080/api/jobs/filterById", {
            params: {
                id: +id
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(11);
        }).catch(error$ => {
        })
    }

    function filterNewsByEmployeeIdAndGroupId(id, gId){
        setLoading(true);
        axios.get("http://localhost:8080/api/newsInCompany/filterById", {
            params: {
                id: +id,
                gId: gId
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(12);
        }).catch(error$ => {
        })
    }

    function filterEquipmentByIdandEquipmentId(eId, eqId){
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeEquipmentView/filterById", {
            params: {
                eId: +eId,
                eqId: eqId
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(4);
        }).catch(error$ => {
        })
    }

    function employeeLeaveViewFilter(eId,ltId) {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeLeaveView/filterById", {
            params: {
                eId : eId,
                ltId : ltId
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(6);
        }).catch(error$ => {
        })
    }

    function employeeLeaveInformationFilter(id, ltId, fd) {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeLeaveInformation/filterById", {
            params: {
                id: id,
                ltId: ltId,
                fd: fd
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(5);
        }).catch(error$ => {
        })
    }

    function employeeProjectViewFilter(eId,pId,dId) {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeProjectView/filterById", {
            params: {
                eId: eId,
                pId: pId,
                dId: dId
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
            setType(10);
        }).catch(error$ => {
        })
    }

    function changeEmployeeStatusFun(employee, employee_status, effective_date) {
        setLoading(true);
        console.log(employee)
        axios.post("http://localhost:8080/api/employeeAddressInformation/changeEmployeeStatus", {}, {
            params: {
                'employee': employee,
                'employee_status': employee_status,
                'effective_date': effective_date
            }
        }).then(response$ => {
            setLoading(false);
            setType(0);
        }).catch(error => {
            console.log(error);
            setErr(error.response.data);
            setLoading(false);
        })
    }

    function insertLeave(employee,leave_type,reason_for_leave,start_date,end_date) {
        setLoading(true);
        axios.post("http://localhost:8080/api/employeeLeaveView/insertLeave", {}, {
            params: {
                'employee': employee,
                'leave_type': leave_type,
                'reason_for_leave': reason_for_leave,
                'start_date' : start_date,
                 'end_date' : end_date
            }
        }).then(response$ => {
            setLoading(false);
            setType(0);
        }).catch(error => {
            setErr(error.response.data);
            setLoading(false);
        })
    }

    function paySlip(employeeId,month, year,bonus) {
        setLoading(true);
        axios.post("http://localhost:8080/api/employeeMostRecentPaymentView/paySlip", {}, {
            params: {
                'employeeId': employeeId,
                'month': month,
                'year': year,
                'bonus' : bonus,
            }
        }).then(response$ => {
            setLoading(false);
            setType(0);
        }).catch(error => {
            console.log(error)
            setErr(error.response.data);
            setLoading(false);
        })
    }
    function insertEmployee(
        first_name,
        last_name,
        date_of_birth,
        age,
        ssn,
        street,
        city,
        postal_code,
        country,
        onboarding_offboarding_program_id,
        work_location_id,
        suffix,
        phone,
        middle_name,
        email_address
    ) {
        setLoading(true);
        const data = {
            first_name,
            last_name,
            date_of_birth,
            age,
            ssn,
            street,
            city,
            postal_code,
            country,
            onboarding_offboarding_program_id,
            work_location_id,
            suffix,
            phone,
            middle_name,
            email_address,
        };

        axios
            .post("http://localhost:8080/api/employeeOnboardingOffboardingPhase/insertEmployee", {}, {
                params: data
            })
            .then(response => {
                setLoading(false);
                setType(0);
            })
            .catch(error => {
                setErr(error.response.data);
                setLoading(false);
            });
    }

    function insertEmployeeProjectPosition(
        employee,
        project,
        project_position,
        reports_to_project_hierarchy,
        from_date_project,
        if_exists_update
    ) {
        setLoading(true);
        const data = {
            employee,
            project,
            project_position,
            reports_to_project_hierarchy,
            from_date_project,
            if_exists_update,
        };

        axios
            .post("http://localhost:8080/api/employeeProjectView/insertEmployeeProjectPosition", {} , {
                params: data
            })
            .then(response => {
                setLoading(false);
                setType(0);
            })
            .catch(error => {
                // Handle error
                console.error('Error inserting employee project position:', error);
                setErr(error.response.data);
                setLoading(false);
            });
    }

    function insertJobAd(
        urgency_passed,
        description_passed,
        date_opened_passed,
        work_location,
        work_place,
        if_exists_update
    ) {
        const data = {
            urgency_passed,
            description_passed,
            date_opened_passed,
            work_location,
            work_place,
            if_exists_update,
        };

        axios
            .post("http://localhost:8080/api/jobs/insertJobAd", {} , {
                params : data
            })
            .then(response => {
                setLoading(false);
                setType(0);
            })
            .catch(error => {
                // Handle error
                console.error('Error inserting job ad:', error);
                setErr(error.response.data);
                setLoading(false);
            });
    }

    function applicationSubmission(
        application_description,
        attached_document_subject,
        attached_document_file_type,
        attached_document_type,
        attached_document_date,
        attached_document_content,
        applicant_ssn,
        applicant_name,
        applicant_surname,
        applicant_date_of_birth,
        applicant_email,
        applicant_phone,
        applicant_city,
        applicant_country,
        applicant_highest_education,
        applicant_work_experience,
        applied_for_job_ad_id
    ) {

        const data = {
            application_description,
            attached_document_subject,
            attached_document_file_type,
            attached_document_type,
            attached_document_date,
            attached_document_content,
            applicant_ssn,
            applicant_name,
            applicant_surname,
            applicant_date_of_birth,
            applicant_email,
            applicant_phone,
            applicant_city,
            applicant_country,
            applicant_highest_education,
            applicant_work_experience,
            applied_for_job_ad_id,
        };

        axios
            .post("http://localhost:8080/api/jobs/applicationSubmission", {}, {
                params: data
            })
            .then(response => {
                setLoading(false);
                setType(0);
            })
            .catch(error => {
                // Handle error
                console.error('Error submitting application:', error);
                setErr(error.response.data);
                setLoading(false);
            });
    }
}

export default ViewsComponent;