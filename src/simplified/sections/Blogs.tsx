import React from 'react'
import { blogLinks, experience, experienceColorArray } from '../../constants'
import { BlogItem, ExperienceItem, MySection } from '../components'

export function Blgos() {
    return (
        <MySection
            id="blogs"
            height={'150vh'}
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
                    {blogLinks.map((i, index) => (<BlogItem
                        key={i.title}
                        title={i.title}
                        url={i.url} />))}
                </div>
            </div>
        </MySection>
    )
}
