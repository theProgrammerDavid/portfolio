import React from 'react'
import { MySection, MyNavBar } from './components'
import { Slider } from './SliderController';
import { ContactMe } from './sections/ContactMe';
import { isMobile } from '../mobile';
import { navBarData } from '../constants';
// import BuyMeACoffee from './components/BuyMeACoffee';

interface iSimplifiedViewProps {
}

function Simplified({ }: iSimplifiedViewProps) {
    return (
        <div id="simplifiedViewRoot">
            {isMobile() ? null : <MyNavBar />}
            {navBarData.map(i => {
                if (i.hide) return <></>
                else return i.component
            })}
            {/* <LandingSection />
            <AboutMe />
            <WorkExperience />
            <Projects />
            <Publications />
            <Achievements />
            <Blgos /> */}
            {/* <ContactMe /> */}
            {/* <MySection className="section">
                <div className="section__heading">Smooth scrolling</div>
            </MySection> */}

            {/* <BuyMeACoffee /> */}

        </div>
    )
}

export default Simplified