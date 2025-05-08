import React from 'react';
import {LootScrollItem} from "./LootScrollItem";

export const ResultContainer = ({ resultItem, handleDone }) => {
    return (
        <div className="result-container">
            <div className="result-item">
                <LootScrollItem key={resultItem.index} item={resultItem} />
            </div>
            <button onClick={handleDone}>
                Done
            </button>
        </div>
    );
};
