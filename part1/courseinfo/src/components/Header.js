import React from 'react';

export default function Header({course}) {
    return (
        <div className="header">
            <h1>{course}</h1>
        </div>
    )
}