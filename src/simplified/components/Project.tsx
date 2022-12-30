import React from 'react'
import { Project } from '../../models'

export function Project(props: Project) {
    return (
        <div
            style={{
                backgroundColor: '#333',
                width: '15vw',
                height: '15vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    color: '#777'
                }}
            >{props.title}</div>
        </div>
    )
}