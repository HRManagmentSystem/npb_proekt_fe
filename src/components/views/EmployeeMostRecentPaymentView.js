import {useRef} from "react";

const EmployeeMostRecentPaymentView = (props) => {
    const inputRef = useRef();
    const inputRef2 = useRef();
    return (
        <>
            <div>
                filter employee id and date:
                <input ref={inputRef} type={"number"}/>
                <input ref={inputRef2} type={"text"}/>
                <button onClick={filterTable}>Submit</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Payment ID</th>
                    <th>Total Amount</th>
                    <th>Comment</th>
                    <th>Most Recent Payment Change Date</th>
                    <th>Bonus Included in Amount</th>
                    <th>Employee ID</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Payment Type ID</th>
                    <th>Payment Type Name</th>
                    <th>Payment Change Reason ID</th>
                    <th>Reason</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.paymentId}</td>
                        <td>{item.totalAmount}</td>
                        <td>{item.comment}</td>
                        <td>{item.mostResentPaymentChangeDate}</td>
                        <td>{item.bonusIncludedInAmount}</td>
                        <td>{item.employeeId}</td>
                        <td>{item.lastName}</td>
                        <td>{item.firstName}</td>
                        <td>{item.paymentTypeId}</td>
                        <td>{item.paymentTypeName}</td>
                        <td>{item.paymentChangeReasonId}</td>
                        <td>{item.reason}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );

    function filterTable() {
        props.findByEmployeeIdandMostResentPaymentChangeDate(inputRef.current['value'], inputRef2.current['value']);
    }
}

export default EmployeeMostRecentPaymentView;