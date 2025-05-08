import React from 'react';

export const CaseOpenBtn = ({ openCase, rolling }) => (
    <button className='open-that-case' onClick={openCase} disabled={rolling}>
        {rolling ? 'Opening...' : 'Open'}
    </button>
);
