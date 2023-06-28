import {useRef} from "react";

const EmployeeEquipmentView = (props) => {

    const inputRef = useRef();
    const inputRef2 = useRef();

    return (
        <>
            <div>
                filter:
                <input ref={inputRef} type={"number"}/>
                <input ref={inputRef2} type={"number"}/>
                <button onClick={filterTable}>Submit</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Equipment ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>SSN</th>
                    <th>Phone</th>
                    <th>Equipment Name</th>
                    <th>Equipment Type</th>
                    <th>Date Taken</th>
                    <th>Date Returned</th>
                    <th>Quantity Taken</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.employeeId}</td>
                        <td>{item.equipmentId}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.ssn}</td>
                        <td>{item.phone}</td>
                        <td>{item.equipmentName}</td>
                        <td>{item.equipmentType}</td>
                        <td>{item.dateTaken}</td>
                        <td>{item.dateReturned}</td>
                        <td>{item.quantityTaken}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );

    function filterTable() {
        props.filterEquipmentByIdandEquipmentId(inputRef.current['value'],inputRef2.current['value'])
    }
}

export default EmployeeEquipmentView;