import React from 'react'
import { Theme, ViewState } from './models';
import Terminal from './terminal/terminal'
import Simplified from './simplified';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context';

interface iViewToggle {
    viewState: ViewState;
    toggleViewState: () => void;
}

function ViewToggle({ viewState, toggleViewState }: iViewToggle) {
    return <div
        style={{
            fontFamily: '"FiraCode", "monospace"'
        }}
        className="helperToggle"
        onClick={() => {
            toggleViewState();
        }}
    >{viewState === ViewState.ADVANCED ? 'Back' : `Developer Mode`}</div>
}

/**
 * 
 *  
    return (
       
    );
 */

function App() {
    const [viewState, setViewState] = React.useState<ViewState>(ViewState.SIMPLIFIED);
    const [themeMode, setThemeMode] = React.useState<Theme>('DARK');

    const toggleViewState = () => {
        if (viewState === ViewState.ADVANCED) setViewState(ViewState.SIMPLIFIED)
        else setViewState(ViewState.ADVANCED)
    }

    React.useEffect(() => {
        let prevTheme = localStorage.getItem("THEME");
        if (prevTheme)
            setThemeMode(prevTheme as Theme)
    }, [])

    return (
        <ThemeContext.Provider value={{ currentTheme: themeMode, changeTheme: setThemeMode }}>
            <ViewToggle viewState={viewState} toggleViewState={toggleViewState} />
            <div className="" style={{
                display: viewState === ViewState.ADVANCED ? 'block' : 'none'
            }}>
                <Terminal />
            </div>
            <div className="" style={{
                display: viewState === ViewState.SIMPLIFIED ? 'block' : 'none'
            }}>
                <Simplified />
            </div>
        </ThemeContext.Provider>
    )
}

export default App