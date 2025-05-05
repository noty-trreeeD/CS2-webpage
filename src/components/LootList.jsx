import React from 'react';
import { LootItem } from './LootItem';

export const LootList = ({ caseId }) => {
    return (
        <div className="loot-list">
            {Object.values(caseId.loot).reverse().map((item, index) => (
                <LootItem key={index} item={item} />
            ))}
        </div>
    );
};

