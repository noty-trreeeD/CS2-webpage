import { useState } from 'react';

export const useLootLogic = (randomItems) => {
    const [rolling, setRolling] = useState(false);
    const [resultItem, setResultItem] = useState(null);
    const [translateX, setTranslateX] = useState(0);

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
        const randomOffset = Math.random() * 150 - 50;
        const needTranslateX = -(selectedIndex * itemWidth - centerOffset + randomOffset);
        const selectedItem = randomItems[selectedIndex];

        setTranslateX(needTranslateX);

        setTimeout(() => {
            setRolling(false);
            setResultItem(selectedItem);
        }, 3000);
    };

    const handleDone = () => {
        setResultItem(null);
        setTranslateX(0);
    };

    return {
        rolling,
        resultItem,
        translateX,
        openCase,
        handleDone
    };
};
