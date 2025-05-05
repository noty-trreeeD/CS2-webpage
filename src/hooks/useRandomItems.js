import { useState, useEffect } from 'react';

const rarityChances = {
    "Mil-Spec": 30,
    "Restricted": 30,
    "Classified": 20,
    "Covert": 12,
    "★ Rare Special Items ★": 8
};

export const useRandomItems = (loot, count, spinKey = 0) => {
    const [randomItems, setRandomItems] = useState([]);

    useEffect(() => {
        const weightedItems = [];

        Object.values(loot).forEach(item => {
            const itemRarity = item.rarity;
            const chances = rarityChances[itemRarity] || 0;
            for (let i = 0; i < chances; i++) {
                weightedItems.push(item);
            }
        });

        const generatedItems = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * weightedItems.length);
            generatedItems.push({...weightedItems[randomIndex]});
        }

        setRandomItems(generatedItems);
    }, [loot, count, spinKey]);

    return randomItems;
};