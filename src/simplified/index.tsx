import React from 'react'
import { NavDots, NavDot, MySection } from './components'
import { Slider } from './SliderController';

const sections = [
    'intro'
]

function NavBarDots() {
    return (
        <NavDots id="sections">
            <NavDot className="nav-dot"></NavDot>
            <NavDot className="nav-dot"></NavDot>
            <NavDot className="nav-dot"></NavDot>
            <NavDot className="nav-dot"></NavDot>
        </NavDots>
    )
}

interface iSimplifiedViewProps {
}

function Simplified({ }: iSimplifiedViewProps) {

    React.useEffect(() => {
        
        /**
         * We just need to register
         * the event listeners
         */
        new Slider({
            dots: "#sections",
            section: ".section"
        });
    }, [])

    return (
        <div id="simplifiedViewRoot"
            style={{
                display: 'block'
            }}
        >
            <NavBarDots />

            <MySection className="section">
                <h2 className="section__heading">Scroll up and down</h2>
            </MySection>
            <MySection className="section">
                <h2 className="section__heading">Click on the nav dots</h2>
            </MySection>
            <MySection className="section">
                <h2 className="section__heading">Smooth scrolling</h2>
            </MySection>
            <MySection className="section">
                <h2 className="section__heading">Well done!</h2>
            </MySection>
        </div>
    )
}

export default Simplified