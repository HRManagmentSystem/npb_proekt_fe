const DepartmentProjects = (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Department ID</th>
                <th>Department Name</th>
                <th>Department Type ID</th>
                <th>Department Type</th>
                <th>Project ID</th>
                <th>Project Name</th>
                <th>Project Category</th>
                <th>Phase ID</th>
                <th>Phase</th>
                <th>Phase Date From</th>
                <th>Phase Date To</th>
                <th>Hierarchy ID</th>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Employee SSN</th>
                <th>Project Position ID</th>
                <th>Project Position Name</th>
            </tr>
            </thead>
            <tbody>
            {props.items.map((item, index) => (
                <tr key={index}>
                    <td>{item.departmentId}</td>
                    <td>{item.departmentName}</td>
                    <td>{item.departmentTypeId}</td>
                    <td>{item.departmentType}</td>
                    <td>{item.projectId}</td>
                    <td>{item.projectName}</td>
                    <td>{item.projectCategory}</td>
                    <td>{item.phaseId}</td>
                    <td>{item.phase}</td>
                    <td>{item.phaseDateFrom}</td>
                    <td>{item.phaseDateTo}</td>
                    <td>{item.hierarchyId}</td>
                    <td>{item.employeeId}</td>
                    <td>{item.employeeName}</td>
                    <td>{item.employeeSsn}</td>
                    <td>{item.projectPositionId}</td>
                    <td>{item.projectPositionName}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default DepartmentProjects;