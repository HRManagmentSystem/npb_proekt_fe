import {useRef} from "react";

const EmployeeEmploymentView = (props) => {

    const inputRef = useRef();

    return (
        <>
            <div>
                filter employee id:
                <input ref={inputRef} type={"number"}/>
                <button onClick={filterTable}>Submit</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Current Employment ID</th>
                    <th>Work Place ID</th>
                    <th>Current Work Place Name</th>
                    <th>Current Work Position Name</th>
                    <th>Current Percentage Work Time</th>
                    <th>Current Department Name</th>
                    <th>Current Department Type Name</th>
                    <th>Current Work Place Salary</th>
                    <th>Current Work Place Full Time Salary</th>
                    <th>Current Effective Date</th>
                    <th>Current Status</th>
                    <th>Previous Employment ID</th>
                    <th>Previous Work Place ID</th>
                    <th>Previous Work Place Name</th>
                    <th>Previous Work Position Name</th>
                    <th>Previous Percentage Work Time</th>
                    <th>Previous Department Name</th>
                    <th>Previous Department Type Name</th>
                    <th>Previous Work Place Salary</th>
                    <th>Previous Work Place Full Time Salary</th>
                    <th>Previous Effective Date</th>
                    <th>Previous Status</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.employeeId}</td>
                        <td>{item.currentEmploymentId}</td>
                        <td>{item.workPlaceId}</td>
                        <td>{item.currentWorkPlaceName}</td>
                        <td>{item.currentWorkPositionName}</td>
                        <td>{item.currentPercentageWorkTime}</td>
                        <td>{item.currentDepartmentName}</td>
                        <td>{item.currentDepartmentTypeName}</td>
                        <td>{item.currentWorkPlaceSalary}</td>
                        <td>{item.currentWorkPlaceFullTimeSalary}</td>
                        <td>{item.currentEffectiveDate}</td>
                        <td>{item.currentStatus}</td>
                        <td>{item.previousEmploymentId}</td>
                        <td>{item.previousWorkPlaceId}</td>
                        <td>{item.previousWorkPlaceName}</td>
                        <td>{item.previousWorkPositionName}</td>
                        <td>{item.previousPercentageWorkTime}</td>
                        <td>{item.previousDepartmentName}</td>
                        <td>{item.previousDepartmentTypeName}</td>
                        <td>{item.previousWorkPlaceSalary}</td>
                        <td>{item.previousWorkPlaceFullTimeSalary}</td>
                        <td>{item.previousEffectiveDate}</td>
                        <td>{item.previousStatus}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );

    function filterTable() {
        props.employeeEmploymentViewFilter(inputRef.current['value']);
    }

}

export default EmployeeEmploymentView;