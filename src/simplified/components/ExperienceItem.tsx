import React from 'react'
import { Circle } from './index'
import { iExperience } from '../../models'

export function ExperienceItem(props: iExperience) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '0em 1em 0em 1em'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    margin: '0.5vw 1vw 5vw 1vw',
                    width: '2vw'
                }}
            >
                <div
                    style={{
                        fontFamily: '"Fira Code", "monospace"',
                    }}
                >
                    {props.end}
                </div>
                <span className="uk-margin" uk-icon="arrow-up"></span>
                <div
                    style={{
                        fontFamily: '"Fira Code", "monospace"',
                    }}
                    className="">{props.start}</div>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignContent: 'center',
                    flexDirection: 'column',
                    margin: '1vw 1vw 2vw 1vw',
                    height: 'auto'
                }}
            >
                <Circle color={props.color!} radius={'15px'} />
                <span
                    style={{
                        height: '120px',
                        borderLeftColor: props.colorSep
                    }}
                    className="uk-divider-vertical"></span>
            </div>
            <div className="">
                <div
                    style={{
                        fontFamily: '"Fira Code", "monospace"',
                        fontSize: '2vw',
                    }}
                >{props.position}</div>
                <div
                    style={{
                        fontFamily: '"Fira Code", "monospace"',
                        fontSize: '1.25vw',
                        marginBottom: '1vw'
                    }}
                >{props.company}, {props.location}</div>
                <div
                    style={{
                        fontFamily: '"Fira Code", "monospace"',
                        color: '#777'
                    }}
                >{props.description}</div>
            </div>
        </div>
    )
}