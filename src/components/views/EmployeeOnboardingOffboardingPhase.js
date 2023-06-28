import {useRef} from "react";

const EmployeeOnboardingOffboardingPhase = (props) => {

    const inputRef = useRef();

    return (
        <>
            <div>
                filter:
                <input ref={inputRef} type={"number"}/>
                <button onClick={filterTable}>Submit</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>SSN</th>
                    <th>Onboarding/Offboarding Program ID</th>
                    <th>Program Description</th>
                    <th>Program Information</th>
                    <th>Program Type</th>
                    <th>Phase ID</th>
                    <th>Phase Name</th>
                    <th>Phase Type ID</th>
                    <th>Phase Type Name</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.ssn}</td>
                        <td>{item.onboardingOffboardingProgramId}</td>
                        <td>{item.programDescription}</td>
                        <td>{item.programInformation}</td>
                        <td>{item.programType}</td>
                        <td>{item.phaseId}</td>
                        <td>{item.phaseName}</td>
                        <td>{item.phaseTypeId}</td>
                        <td>{item.phaseTypeName}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
    function filterTable() {
        props.employeeOnboardingOffboardingPhaseFilter(inputRef.current['value']);
    }
}

export default EmployeeOnboardingOffboardingPhase;