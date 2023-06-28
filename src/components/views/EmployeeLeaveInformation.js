import {useRef} from "react";

const EmployeeLeaveInformation = (props) => {
    const inputRef = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    return (
        <>
            <div>
                filter employee id and id leave type and free days:
                <input ref={inputRef} type={"number"}/>
                <input ref={inputRef2} type={"number"}/>
                <input ref={inputRef3} type={"number"}/>
                <button onClick={filterTable}>Submit</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Leave Information ID</th>
                    <th>Leave Type ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>SSN</th>
                    <th>Free Days</th>
                    <th>Leave Type Name</th>
                    <th>Date Valid To</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.employeeId}</td>
                        <td>{item.leaveInformationId}</td>
                        <td>{item.leaveTypeId}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.ssn}</td>
                        <td>{item.freeDays}</td>
                        <td>{item.leaveTypeName}</td>
                        <td>{item.dateValidTo}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
    function filterTable() {
        props.employeeLeaveInformationFilter(inputRef.current['value'], inputRef2.current['value'],inputRef3.current['value']);
    }
}

export default EmployeeLeaveInformation;