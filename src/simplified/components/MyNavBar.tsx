import React from 'react'
import { NavBar, NavItem } from './index'
import { navBarData } from '../../constants'

export function MyNavBar() {
    return (
        <NavBar
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                gap: '5em',
                position: 'fixed',
                height: '7vh',
                width: '100vw',
                color: 'white',
                backdropFilter: 'blur(10px)'
            }}
        >
            {/* <ul></ul> */}
            {navBarData.map((i, index) => (<NavItem
                key={index}
                className='navItem'
                onClick={() => document.getElementById(i.idTag)!.scrollIntoView({
                    behavior: 'smooth'
                })
                }
            >{i.name}</NavItem>))}
        </NavBar>
    )
}
