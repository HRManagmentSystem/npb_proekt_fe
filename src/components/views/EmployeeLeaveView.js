import {useRef} from "react";

const EmployeeLeaveView = (props) => {
    const inputRef = useRef();
    const inputRef2 = useRef();
    return (
        <>
            filter employeeid and leave type id:
            <input ref={inputRef} type={"number"}/>
            <input ref={inputRef2} type={"number"}/>
            <button onClick={filterTable}>Submit</button>
            <table>
                <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Leave Type ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>SSN</th>
                    <th>Days Taken</th>
                    <th>Date From</th>
                    <th>Date To</th>
                    <th>Leave Type Name</th>
                    <th>Reason</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.employeeId}</td>
                        <td>{item.leaveTypeId}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.ssn}</td>
                        <td>{item.daysTaken}</td>
                        <td>{item.dateFrom}</td>
                        <td>{item.dateTo}</td>
                        <td>{item.leaveTypeName}</td>
                        <td>{item.reason}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );

    function filterTable() {
        props.employeeLeaveViewFilter(inputRef.current['value'],inputRef2.current['value'])
    }
}
export default EmployeeLeaveView;