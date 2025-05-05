import React from 'react';
import {CaseItem} from "./CaseItem";

export const CaseList = ({cases}) => {
    return (
        <div className="case-list">
            {cases.map((caseItem) => (
                <CaseItem key={caseItem.id} caseItem={caseItem} />
            ))}
        </div>
    );
};
