const EmployeeAddressInformation = (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Employee ID</th>
                <th>Employee Full Name</th>
                <th>Employee SSN</th>
                <th>Work Location ID</th>
                <th>Work Location Address</th>
                <th>Place ID</th>
                <th>Place Name</th>
            </tr>
            </thead>
            <tbody>
            {props.items.map((item, index) => (
                <tr key={index}>
                    <td>{item.employeeId}</td>
                    <td>{item.employeeFullName}</td>
                    <td>{item.employeeSsn}</td>
                    <td>{item.workLocationId}</td>
                    <td>{item.workLocationAddress}</td>
                    <td>{item.placeId}</td>
                    <td>{item.placeName}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default EmployeeAddressInformation;