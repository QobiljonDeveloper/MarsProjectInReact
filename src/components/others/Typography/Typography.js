import React from 'react'

const Typography = ({ text, classes }) => {
    return (
        <div className="prose">
            <h1 className={classes}>{text}</h1>
        </div>
    )
}

export default Typography