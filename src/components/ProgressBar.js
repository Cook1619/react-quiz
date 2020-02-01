import React from 'react'

export const ProgressBar = (max, current) => {

    const width = (current/max) * 100
    return (
        <div id="progressBar">
            <div id="progessBarFull" style={{width: `${width}%`}}></div>
        </div>
    )
}
