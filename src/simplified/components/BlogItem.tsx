import React from 'react'
import { iBlog } from '../../models'
import { THEMES } from '../../theme'

export function BlogItem(props: iBlog) {
    return (
        <ul
            style={{
                border: `1px solid ${THEMES.BORDER_COLOR}`,
                padding: '2em',
                margin: '2em',
                width: '100%'
            }}
            uk-accordion='true'>
            <li className={`${props.open ? "uk-open" : ""}`} >
                <a
                    style={{
                        color: THEMES.BORDER_COLOR,
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
