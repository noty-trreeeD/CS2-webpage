import React from 'react';
import { LootScrollItems } from './LootScrollItems';
import { ResultContainer } from "./ResultContainer";
import { CaseOpenBtn } from "./CaseOpenBtn";
import { useRandomItems } from "../hooks/useRandomItems";
import { useLootLogic } from "../hooks/useLootLogic";

export const LootScroll = ({ caseId }) => {
    const randomItems = useRandomItems(caseId.loot, 40);
    const { rolling, resultItem, translateX, openCase, handleDone } = useLootLogic(randomItems);

    return (
        <div className="loot-scroll" style={{ overflow: 'hidden' }}>
            <div className="case-pointer"></div>
            <LootScrollItems randomItems={randomItems} translateX={translateX} rolling={rolling} />
            {!resultItem
                ? <CaseOpenBtn openCase={openCase} rolling={rolling} />
                : <ResultContainer resultItem={resultItem} handleDone={handleDone} />
            }
        </div>
    );
};
