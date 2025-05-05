import React, { useState } from 'react';
import { LootScrollItem } from './LootScrollItem';
import { useRandomItems } from "../hooks/useRandomItems";

export const LootScroll = ({ caseId }) => {
    const [spinKey, setSpinKey] = useState(0);
    const [rolling, setRolling] = useState(false);
    const [resultItem, setResultItem] = useState(null);
    const [translateX, setTranslateX] = useState(0);
    const randomItems = useRandomItems(caseId.loot, 40, spinKey);

    const openCase = () => {
        if (rolling || randomItems.length === 0) return;

        setRolling(true);
        setResultItem(null);

        const containerWidth = 1200;
        const itemWidth = 204;
        const centerOffset = containerWidth / 2 - itemWidth / 2;
        const minIndex = 27;
        const maxIndex = 36;
        const selectedIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
        const randomOffset = Math.random() * 199 - 99;
        const needTranslateX = -(selectedIndex * itemWidth - centerOffset + randomOffset);
        const selectedItem = randomItems[selectedIndex];

        setTranslateX(needTranslateX);

        setTimeout(() => {
            setRolling(false);
            setResultItem(selectedItem);
            console.log(selectedItem);
        }, 3000);
    };

    const handleSpinAgain = () => {
        setSpinKey(prev => prev + 1);
        setRolling(false);
        setResultItem(null);
        setTranslateX(0);
    };

    return (
        <div className="loot-scroll" style={{ overflow: 'hidden' }}>
            <div className="case-pointer"></div>
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

            {!resultItem ? (
                <button className='open-case-button' onClick={openCase} disabled={rolling}>
                    {rolling ? 'Opening...' : 'Open'}
                </button>
            ) : (
                <div className="result-container">
                    <div className="result-item">
                        🎉 You got: {resultItem.name} ({resultItem.rarity})
                    </div>
                    <button onClick={handleSpinAgain}>
                        Spin Again
                    </button>
                </div>
            )}
        </div>
    );
};