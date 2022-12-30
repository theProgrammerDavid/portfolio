import React from 'react'
import { iBlog } from '../../models'

export function BlogItem(props: iBlog) {
    return (
        <ul
            style={{
                border: '1px solid #555',
                padding: '2em',
                margin: '2em'
            }}
            uk-accordion='true'>
            <li className={`${props.open ? "uk-open" : ""}`} >
                <a
                    style={{
                        color: "#555",
                        fontSize: '3vmin',
                        fontFamily: '"Fira Code", "monospace"',
                        textAlign: 'center'
                    }}
                    className="uk-accordion-title" >{props.title}</a>
                <div className="uk-accordion-content">
                    <iframe
                        style={{
                            width: '60vmax',
                            height: '30vmax'
                        }}
                        src={props.url} />
                </div>
            </li>
        </ul>
    )
}
