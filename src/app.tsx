import React from 'react'
import { ViewState } from './terminal/models';
import Terminal from './terminal/terminal'
import Simplified from './simplified';

interface iViewToggle {
    viewState: ViewState;
    toggleViewState: () => void;
}

function ViewToggle({ viewState, toggleViewState }: iViewToggle) {
    return <div
        className="helperToggle"
        onClick={() => {
            toggleViewState();
        }}
    >Switch to {viewState === ViewState.ADVANCED ? 'Simplified' : 'Advanced'} view</div>
}

function LoadingScreen() {
    return <div id="loadingScreen">
        <div className="pa">
            <span>...</span>
        </div>
    </div>
}

function App() {
    const [viewState, setViewState] = React.useState<ViewState>(ViewState.SIMPLIFIED);

    const toggleViewState = () => {
        if (viewState === ViewState.ADVANCED) setViewState(ViewState.SIMPLIFIED)
        else setViewState(ViewState.ADVANCED)
    }

    return (
        <>
            <LoadingScreen />
            <ViewToggle viewState={viewState} toggleViewState={toggleViewState} />
            {viewState === ViewState.ADVANCED ? <Terminal /> : <Simplified />}
        </>
    )
}

export default App