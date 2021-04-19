import React from 'react';

export default function Content({part, exerciseNumber}) {
    return (
        <div>
            <p>{part} {exerciseNumber}</p>
        </div>
    )
}