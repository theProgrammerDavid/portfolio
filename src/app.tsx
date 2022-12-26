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

function App() {
    const [viewState, setViewState] = React.useState<ViewState>(ViewState.SIMPLIFIED);

    const toggleViewState = () => {
        if (viewState === ViewState.ADVANCED) setViewState(ViewState.SIMPLIFIED)
        else setViewState(ViewState.ADVANCED)
    }

    return (
        <>
            <ViewToggle viewState={viewState} toggleViewState={toggleViewState} />
            {/* {viewState === ViewState.ADVANCED ? <Terminal /> : <Simplified />} */}
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

        </>
    )
}

export default App