import React from 'react';

export const LootItem = ({ item }) => {
    return (
        <div className="loot-list-item">
            <h3 className="loot-name">{item.name}</h3>
            <img src={item.photo} alt={item.name} />
            <p className="loot-rarity">{item.rarity}</p>
        </div>
    );
};
