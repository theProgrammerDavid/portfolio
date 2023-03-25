import React from 'react'
import { Theme, ViewState } from './models';
import Terminal from './terminal/terminal'
import Simplified from './simplified';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context';
import { setupScroll } from './util';

interface iViewToggle {
    viewState: ViewState;
    toggleViewState: () => void;
}

function ViewToggle({ viewState, toggleViewState }: iViewToggle) {
    return <div
        style={{
            fontFamily: '"Fira Code", "monospace"'
        }}
        className="helperToggle glowing"
        onClick={() => {
            toggleViewState();
        }}
    >
        <div className=""
        style={{
            backgroundColor: "rgb(102, 102, 102)",
            padding: '10px'
        }}
        >
            {viewState === ViewState.ADVANCED ? '<-Back' : `Developer Mode`}
        </div>
    </div>
}


function App() {
    const [viewState, setViewState] = React.useState<ViewState>(ViewState.SIMPLIFIED);
    const [themeMode, setThemeMode] = React.useState<Theme>('DARK');

    const toggleViewState = () => {
        if (viewState === ViewState.ADVANCED) setViewState(ViewState.SIMPLIFIED)
        else setViewState(ViewState.ADVANCED)
    }

    React.useEffect(() => {
        setupScroll();
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