import React from 'react'
import { isMobile } from '../../mobile'
import { iBlog } from '../../models'
import { THEMES } from '../../theme'
import { moderateScale } from '../../util'

export function BlogItem(props: iBlog) {
    return (
        <ul
            onClick={() => window.open(props.url)}
            style={{
                border: `1px solid ${THEMES.BORDER_COLOR}`,
                padding: moderateScale(isMobile() ? 5 : 5),
                margin: moderateScale(isMobile() ? 5 : 5),
                width: '90%'
            }}
            uk-accordion='true'>
            {isMobile() ? <>
                <p
                    className='uk-margin-small uk-padding-small '
                ><a
                    href={props.url}
                    style={{
                        color: THEMES.LINK,
                        fontSize: moderateScale(isMobile() ? 15 : 5),
                        fontFamily: '"Fira Code", "monospace"',
                        textAlign: 'center'
                    }}
                >{props.title}</a></p>
            </> : <>
                <li className={`${props.open ? "uk-open" : ""}`} >
                    <a
                        style={{
                            color: THEMES.BORDER_COLOR,
                            fontSize: moderateScale(isMobile() ? 15 : 5),
                            fontFamily: '"Fira Code", "monospace"',
                            textAlign: 'center'
                        }}
                        className="uk-accordion-title" >{props.title}</a>
                    <div className="uk-accordion-content">
                        <iframe
                            style={{
                                // width: moderateScale(isMobile() ? 5 : 5),
                                width: '100%'
                                // height: 'auto'
                            }}
                            src={props.url} />
                    </div>
                </li>
            </>}
        </ul>
    )
}
