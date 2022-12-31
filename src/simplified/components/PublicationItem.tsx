import React from 'react'
import { iBlog, Publication } from '../../models'
import { THEMES } from '../../theme'

export function PublicationItem(props: Publication) {
    return (
        <ul
            style={{
                border: `1px solid ${THEMES.BORDER_COLOR}`,
                padding: '2em',
                margin: '2em'
            }}
            uk-accordion='true'>
            <li className={`${props.open ? "uk-open" : ""}`} >
                <a
                    href={props.url}
                    style={{
                        color: "#555",
                        fontSize: '3vmin',
                        fontFamily: '"Fira Code", "monospace"',
                        textAlign: 'center',
                    }}
                    className="uk-accordion-title" >{props.name}</a>
                <div
                    style={{
                        fontFamily: '"Fira Code", "monospace"',
                        textAlign: "justify",
                        textJustify: "inter-word"
                    }}
                    className="uk-accordion-content">
                    <p>{props.abstract}</p>
                    <p><a href={props.url}>DOI: {props.doi}</a></p>
                </div>
            </li>
        </ul>
    )
}
