import {useRef} from "react";

const EmployeePeerFeedback = (props) => {
    const inputRef = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    return (
        <>
            <div>
                filter employee id and id question employee and id answer employee:
                <input ref={inputRef} type={"number"}/>
                <input ref={inputRef2} type={"number"}/>
                <input ref={inputRef3} type={"number"}/>
                <button onClick={filterTable}>Submit</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Peer Feedback ID</th>
                    <th>Created Date</th>
                    <th>Feedback Status</th>
                    <th>Evaluation For Employee ID</th>
                    <th>Evaluation For Employee First Name</th>
                    <th>Evaluation For Employee Last Name</th>
                    <th>Evaluation For Employee SSN</th>
                    <th>Peer Feedback Question ID</th>
                    <th>Question ID</th>
                    <th>Question Title</th>
                    <th>Question Body</th>
                    <th>Answer ID</th>
                    <th>Answer Body</th>
                    <th>Answer Rating</th>
                    <th>Answer Status</th>
                    <th>Answer Date</th>
                    <th>Answered From Employee ID</th>
                    <th>Answered From Employee First Name</th>
                    <th>Answered From Employee Last Name</th>
                    <th>Answered From Employee SSN</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.peerFeedbackId}</td>
                        <td>{item.peerFeedbackCreatedDate}</td>
                        <td>{item.peerFeedbackStatus}</td>
                        <td>{item.evaluationForEmployeeId}</td>
                        <td>{item.evaluationForEmployeeFirstName}</td>
                        <td>{item.evaluationForEmployeeLastName}</td>
                        <td>{item.evaluationForEmployeeSsn}</td>
                        <td>{item.peerFeedbackQuestionId}</td>
                        <td>{item.questionId}</td>
                        <td>{item.questionTitle}</td>
                        <td>{item.questionBody}</td>
                        <td>{item.answerId}</td>
                        <td>{item.answerBody}</td>
                        <td>{item.answerRating}</td>
                        <td>{item.answerStatus}</td>
                        <td>{item.answerDate}</td>
                        <td>{item.answeredFromEmployeeId}</td>
                        <td>{item.answeredFromEmployeeFirstName}</td>
                        <td>{item.answeredFromEmployeeLastName}</td>
                        <td>{item.answeredFromEmployeeSsn}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
    function filterTable() {
        props.employeePeerFeedbackFilterByIds(inputRef.current['value'], inputRef2.current['value'],inputRef3.current['value']);
    }
}
export default EmployeePeerFeedback;