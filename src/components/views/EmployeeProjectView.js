import {useRef} from "react";

const EmployeeProjectView = (props) => {
    const inputRef = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    return (
        <>
            <div>
                filter employee id and project id and department id:
                <input ref={inputRef} type={"number"}/>
                <input ref={inputRef2} type={"number"}/>
                <input ref={inputRef3} type={"number"}/>
                <button onClick={filterTable}>Submit</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Project Hierarchy ID</th>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Employee Last Name</th>
                    <th>Project ID</th>
                    <th>Project Name</th>
                    <th>Department ID</th>
                    <th>Department Name</th>
                    <th>From Date</th>
                    <th>Due Date</th>
                    <th>Project Position ID</th>
                    <th>Project Position Name</th>
                    <th>Reports To Project Hierarchy ID</th>
                    <th>Reports To Employee ID</th>
                    <th>Reports To Employee Name</th>
                    <th>Reports To Employee Last Name</th>
                    <th>Reports To Project Position ID</th>
                    <th>Reports To Project Position Name</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.projectHierarchyId}</td>
                        <td>{item.employeeId}</td>
                        <td>{item.employeeName}</td>
                        <td>{item.employeeLastName}</td>
                        <td>{item.projectId}</td>
                        <td>{item.projectName}</td>
                        <td>{item.departmentId}</td>
                        <td>{item.departmentName}</td>
                        <td>{item.fromDate}</td>
                        <td>{item.dueDate}</td>
                        <td>{item.projectPositionId}</td>
                        <td>{item.projectPositionName}</td>
                        <td>{item.reportsToProjectHierarchyId}</td>
                        <td>{item.reportsToEmployeeId}</td>
                        <td>{item.reportsToEmployeeName}</td>
                        <td>{item.reportsToEmployeeLastName}</td>
                        <td>{item.reportsToProjectPositionId}</td>
                        <td>{item.reportsToProjectPositionName}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
    function filterTable() {
        props.employeeProjectViewFilter(inputRef.current['value'], inputRef2.current['value'],inputRef3.current['value']);
    }
}

export default EmployeeProjectView;