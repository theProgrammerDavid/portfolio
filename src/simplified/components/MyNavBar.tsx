import React from 'react'
import { NavBar, NavItem } from './index'
import { navBarData } from '../../constants'
import { ThemeContext } from '../../context';
import { iContext } from '../../models';
import { getTheme, THEMES } from '../../theme';

export function MyNavBar() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;

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
            {navBarData.map((i, index) => (<NavItem
                key={index}
                className='navItem'
                onClick={() => document.getElementById(i.idTag)!.scrollIntoView({
                    behavior: 'smooth'
                })
                }
            >{i.name}</NavItem>))}

            <button
                className='uk-button'
                style={{
                    fontFamily: '"FiraCode", "monospace"',
                    borderRadius: '0.2vmax',
                    color: THEMES.TEXT,
                    backgroundColor: currentTheme === "DARK" ? THEMES.BG_LIGHT : THEMES.BG_DARK
                }}
                onClick={() => {
                    changeTheme(currentTheme === "DARK" ? "LIGHT" : "DARK")
                    localStorage.setItem("THEME", currentTheme === "DARK" ? "LIGHT" : "DARK");
                }}
            >{currentTheme === "DARK" ? "DARK" : "LIGHT"}</button>
        </NavBar>
    )
}
