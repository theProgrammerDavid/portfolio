import React from 'react'
import { isMobile } from '../../mobile'
import { iBlog, Publication } from '../../models'
import { THEMES } from '../../theme'
import { moderateScale } from '../../util'

export function PublicationItem(props: Publication) {
    return (
        <ul
            style={{
                border: `1px solid ${THEMES.BORDER_COLOR}`,
                padding: '2rem',
                margin: '2rem'
            }}
            uk-accordion='true'>
            <li className={`${props.open ? "uk-open" : ""}`} >
                <a
                    href={props.url}
                    style={{
                        color: THEMES.BORDER_COLOR,
                        fontSize: moderateScale(isMobile() ? 15 : 7),
                        fontFamily: '"Fira Code", "monospace"',
                        textAlign: isMobile() ? 'center' : 'inherit',
                    }}
                    className="uk-accordion-title" >{props.name}</a>
                <div
                    style={{
                        fontFamily: '"Fira Code", "monospace"',
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontSize: isMobile() ? moderateScale(13) : 'inherit'
                    }}
                    className="uk-accordion-content">
                    <p>{isMobile() ? `${props.abstract?.slice(0, 250)}...`: props.abstract}</p>
                    <p><a href={props.url}>DOI: {props.doi}</a></p>
                </div>
            </li>
        </ul>
    )
}
