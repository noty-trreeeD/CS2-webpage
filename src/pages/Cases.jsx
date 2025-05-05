import React, {useState, useEffect} from "react";
import {CaseList} from "../components/CaseList";
import casesData from "../API/cases.json";
import "../styles/Cases.css"

export const Cases = () => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        setCases(casesData);
    }, []);

    const openCase = () => {

    }

    return (
        <div className='cases container'>
            <h1 className='cases-title'>Cases</h1>
            {cases.length === 0
                ? <h1>Loading</h1>
                : <CaseList cases={cases}></CaseList>
            }
        </div>
    );
}

