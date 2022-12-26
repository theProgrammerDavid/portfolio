import React from 'react'
import { ViewState } from './models';
import Terminal from './terminal'

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

function SimplifiedView() {
    return <>Hi</>
}

function App() {
    const [viewState, setViewState] = React.useState<ViewState>(ViewState.ADVANCED);

    const toggleViewState = () => {
        if (viewState === ViewState.ADVANCED) setViewState(ViewState.SIMPLIFIED)
        else setViewState(ViewState.ADVANCED)
    }

    return (
        <>
            <ViewToggle viewState={viewState} toggleViewState={toggleViewState} />
            {viewState === ViewState.ADVANCED ? <Terminal /> : <SimplifiedView />}
        </>
    )
}

export default App