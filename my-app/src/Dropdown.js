import { useState } from 'react';

function Dropdown({setFilter, issueRequest, setIssueRequest}) {


    function handleSort(e) {
        setFilter(e.target.value)
        setIssueRequest(!issueRequest)
    };

    return (
        <label >
            Sort Movies  
            <select className="dropdown" onChange={handleSort}>
                <option></option>
                <option className="dropdown-item" >Alphabetical (A-Z)</option>
                {/* <option className="dropdown-item" >Release Date</option>
                <option className="dropdown-item" >Box Office ($)</option> */}
            </select>
        </label>
    )
};

export default Dropdown;