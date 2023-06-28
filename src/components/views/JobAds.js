import {useRef} from "react";

const JobAds = (props) => {
    const inputRef = useRef();
    return (
        <>
            <div>
                filter worklocation id:
                <input ref={inputRef} type={"number"}/>
                <button onClick={filterTable}>Submit</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Job Ad ID</th>
                    <th>Job Description</th>
                    <th>Work Location ID</th>
                    <th>Work Location</th>
                    <th>Place ID</th>
                    <th>Place Name</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.jobAdId}</td>
                        <td>{item.jobDescription}</td>
                        <td>{item.workLocationId}</td>
                        <td>{item.workLocation}</td>
                        <td>{item.placeId}</td>
                        <td>{item.placeName}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
    function filterTable() {
        props.filterJobAdsByWorkLocationId(inputRef.current['value']);
    }
}
export default JobAds;