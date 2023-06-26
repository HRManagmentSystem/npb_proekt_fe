import {useState} from "react";
import axios from "axios";
import {PulseLoader} from "react-spinners";
import DepartmentProjects from "../DepartmentProjects";

const ViewsComponent = (props) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [type, setType] = useState(0);

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
                        <button onClick={() => {}}>employee_employment_view</button>
                    </li>
                    <li>
                        <button onClick={employeeEquipmentView}>employee_equipment_view</button>
                    </li>
                    <li>
                        <button onClick={employeeFeedbacks}>employee_feedbacks</button>
                    </li>
                    <li>
                        <button>employee_in_onboarding_offboarding_phase</button>
                    </li>
                    <li>
                        <button>employee_leave_view</button>
                    </li>
                    <li>
                        <button>employee_most_recent_payment_view</button>
                    </li>
                    <li>
                        <button>employee_project_view</button>
                    </li>
                    <li>
                        <button onClick={jobAds}>job_ads</button>
                    </li>
                    <li>
                        <button>news_in_company</button>
                    </li>
                </ul>
            </div>
            <div>
                {
                    !loading && type === 1 && <DepartmentProjects items={data} />
                }
                {
                    loading && <h3>Loading <PulseLoader/></h3>
                }
            </div>
        </>
    )

    function jobAds() {
        setLoading(true);
        axios.get("http://localhost:8080/api/jobs/first", {
            params: {
                n: 50,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
        }).catch(error$ => {
        })
    }

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
        }).catch(error$ => {
        })
    }

    function employeeEmploymentView() {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeEquipmentView/first", {
            params: {
                n: 50,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
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
        }).catch(error$ => {
        })
    }

    function employeeFeedbacks() {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeFeedbacks/first", {
            params: {
                n: 50,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
        }).catch(error$ => {
        })
    }

    function employeeInOnboardingOffboarding_phase() {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeFeedbacks/first", {
            params: {
                n: 50,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
        }).catch(error$ => {
        })
    }

    function employeeLeaveView() {
        setLoading(true);
        axios.get("http://localhost:8080/api/employeeFeedbacks/first", {
            params: {
                n: 50,
            }
        }).then(response$ => {
            setData(response$.data);
            setLoading(false);
        }).catch(error$ => {
        })
    }

}

export default ViewsComponent;