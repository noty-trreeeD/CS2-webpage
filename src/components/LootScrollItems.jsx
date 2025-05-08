import React from 'react';
import { LootScrollItem } from './LootScrollItem';

export const LootScrollItems = ({ randomItems, spinKey, translateX, rolling }) => (
    <div
        key={spinKey}
        className="case-items"
        style={{
            display: "flex",
            transform: `translateX(${translateX}px)`,
            transition: rolling ? 'transform 3s cubic-bezier(0.1, 0.9, 0.25, 1)' : 'none'
        }}
    >
        {randomItems.map((item, index) => (
            <LootScrollItem key={`${spinKey}-${index}`} item={item} />
        ))}
    </div>
);
