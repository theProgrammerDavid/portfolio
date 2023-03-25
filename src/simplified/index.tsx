import React from 'react'
import { MySection, MyNavBar } from './components'
import { isMobile } from '../mobile';
import { navBarData } from '../constants';

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

        </div>
    )
}

export default Simplified