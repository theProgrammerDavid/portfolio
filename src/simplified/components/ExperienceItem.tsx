import React from 'react'
import { Circle } from './index'
import { iExperience } from '../../models'
import { moderateScale, scale } from '../../util'
import { isMobile } from '../../mobile'

export function ExperienceItem(props: iExperience) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                // margin: '0em 1em 0em 1em'
                margin: scale(isMobile() ? 15 : 0),
                // width: moderateScale(isMobile() ? 350 : 450)
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    marginTop: isMobile() ? 'inherit' : moderateScale(10),
                    // margin: '0.5vw 1vw 5vw 1vw',
                    margin: scale(isMobile() ? 15 : 0),
                    maxWidth: moderateScale(10)
                    // width: '2vw'
                }}
            >
                <div
                    style={{
                        fontFamily: '"Fira Code", "monospace"',
                        fontSize: moderateScale(isMobile() ? 12 : 5)
                    }}
                >
                    {props.end}
                </div>
                <span
                    className="uk-margin"
                    uk-icon='icon: arrow-up; ratio: 2'
                ></span>
                <div
                    style={{
                        fontFamily: '"Fira Code", "monospace"',
                        fontSize: moderateScale(isMobile() ? 12 : 5)
                    }}
                    className="">{props.start}</div>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignContent: 'center',
                    flexDirection: 'column',
                    margin: scale(isMobile() ? 15 : 5),
                    height: 'auto'
                }}
            >
                <Circle color={props.color!} radius={'15px'} />
                <span
                    style={{
                        height: scale(isMobile() ? 100 : 25),
                        borderLeftColor: props.colorSep
                    }}
                    className="uk-divider-vertical"></span>
            </div>
            <div className=""
                style={{
                    // width: moderateScale(isMobile() ? 200 : 500)
                }}
            >
                <div
                    style={{
                        fontFamily: '"Fira Code", "monospace"',
                        fontSize: moderateScale(isMobile() ? 14 : 10),
                    }}
                >{props.position}</div>
                <div
                    style={{
                        fontFamily: '"Fira Code", "monospace"',
                        fontSize: moderateScale(isMobile() ? 12 : 7),
                        marginBottom: '1vw'
                    }}
                >{props.company}, {props.location}</div>
                <div
                    style={{
                        fontFamily: '"Fira Code", "monospace"',
                        color: '#777',
                        fontSize: moderateScale(isMobile() ? 10 : 6)
                    }}
                >{props.description}</div>
            </div>
        </div >
    )
}