import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import casesData from "../API/cases.json";
import '../styles/CaseId.css';
import { LootList } from "../components/LootList";
import { LootScroll } from "../components/LootScroll";

export const CaseIdPage = () => {
    const params = useParams();
    const currantCase = casesData[params.id - 1];

    return (
        <div className='casePage container'>
            <h1>{currantCase.name}</h1>
            <div className="scroll-container">
                <LootScroll caseId={currantCase} />
            </div>
            <img src={currantCase.photo} alt="" />
            <LootList caseId={currantCase} />
        </div>
    );
};
