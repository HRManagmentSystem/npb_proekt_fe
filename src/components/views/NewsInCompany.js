import {useRef} from "react";

const NewsInCompany = (props) => {
    const inputRef = useRef();
    const inputRef2 = useRef();
    return (
        <>
            <div>
                filter employee id and group id:
                <input ref={inputRef} type={"number"}/>
                <input ref={inputRef2} type={"number"}/>
                <button onClick={filterTable}>Submit</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>News ID</th>
                    <th>News Title</th>
                    <th>News Description</th>
                    <th>Employee Publish ID</th>
                    <th>Employee Publish Full Name</th>
                    <th>News Category ID</th>
                    <th>News Category Name</th>
                    <th>News Category Description</th>
                    <th>Employee Group ID</th>
                    <th>Employee Group Name</th>
                    <th>Employee Group Description</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.newsId}</td>
                        <td>{item.newsTitle}</td>
                        <td>{item.newsDescription}</td>
                        <td>{item.employeePublishId}</td>
                        <td>{item.employeePublishFullNameName}</td>
                        <td>{item.newsCategoryId}</td>
                        <td>{item.newCategoryName}</td>
                        <td>{item.newsCategoryDescription}</td>
                        <td>{item.employeeGroupId}</td>
                        <td>{item.employeeGroupName}</td>
                        <td>{item.employeeGroupDescription}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
    function filterTable() {
        props.filterNewsByEmployeeIdAndGroupId(inputRef.current['value'], inputRef2.current['value']);
    }
};

export default NewsInCompany;