import React from "react";
import { useNavigate } from "react-router-dom";

export const CaseItem = (props) => {
    const router = useNavigate()

    return (
        <div className="case-list-item" onClick={() => router(`/cases/${props.caseItem.id}`)}>
            <h3>{props.caseItem.name}</h3>
            <img src={props.caseItem.photo} alt=""/>
            <p></p>
            <button className='open-case-button'>Open</button>
        </div>
    );
};
