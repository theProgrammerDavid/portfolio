import React from 'react'
import { NavBar, NavItem } from './index'
import { navBarData } from '../../constants'
import { ThemeContext } from '../../context';
import { iContext } from '../../models';
import { DarkModeToggle } from "react-dark-mode-toggle-2";

export function MyNavBar() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;

    return (
        <NavBar
            id="myNavBar"
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                alignContent: 'center',
                gap: '5em',
                position: 'fixed',
                height: '10vh',
                width: '100%',
                color: 'white',
                backdropFilter: 'blur(10px)'
            }}
        >
            {navBarData.map((i, index) => (<NavItem
                key={index}
                className='navItem'
                onClick={() => document.getElementById(i.idTag)!.scrollIntoView({
                    behavior: 'smooth',
                    block: "center"
                })
                }
            >{i.name}</NavItem>))}
            <DarkModeToggle
                speed={4}
                isDarkMode={currentTheme === "DARK"}
                onChange={(e) => {
                    changeTheme(currentTheme === "DARK" ? "LIGHT" : "DARK")
                    localStorage.setItem("THEME", currentTheme === "DARK" ? "LIGHT" : "DARK");
                }}
            />
        </NavBar>
    )
}
