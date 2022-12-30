import React from 'react'
import { NavDots, NavDot, MySection, MyNavBar } from './components'
import { Slider } from './SliderController';
import { LandingSection, AboutMe, WorkExperience, Projects, Blgos } from './sections'
import { ContactMe } from './sections/ContactMe';

interface iSimplifiedViewProps {
}

function Simplified({ }: iSimplifiedViewProps) {
    return (
        <div id="simplifiedViewRoot">
            <MyNavBar />
            <LandingSection />
            <AboutMe />
            <WorkExperience />
            <Projects />
            <Blgos />
            {/* <ContactMe /> */}
            {/* <MySection className="section">
                <div className="section__heading">Smooth scrolling</div>
            </MySection> */}

        </div>
    )
}

export default Simplified