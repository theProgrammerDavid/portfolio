import React from 'react'
import { experience, experienceColorArray } from '../../constants'
import { ExperienceItem, MySection } from '../components'

export function Blgos() {
    return (
        <MySection
            id="blogs"
            height={'140vh'}
            className="section"
        >
            <div >
                <h1 className="uk-heading-xlarge"
                    style={{
                        textAlign: 'center',
                        color: '#444',
                        marginBottom: '4vw',
                        fontWeight: 'lighter'
                    }}
                >Blogs</h1>
                <div className=""
                    style={{
                        maxWidth: '70vw'
                    }}
                >
                    
                </div>
            </div>
        </MySection>
    )
}
