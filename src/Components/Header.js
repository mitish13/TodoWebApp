import React from 'react'

export default function Header(props) {
    return (
        <div>
            <h1 id="header">{props.header}</h1>
        </div>
    )
}