import React from 'react';

export const LootScrollItem = ({ item }) => {
    return (
        <div className='loot-scroll-item'>
            <img src={item.photo} alt={item.name} />
            <div>{item.name}</div>
        </div>
    );
};

