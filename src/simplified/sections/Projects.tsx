import React from 'react'
import { experience, experienceColorArray, projects } from '../../constants'
import { ExperienceItem, MySection, Project } from '../components'

export function Projects() {
    return (
        <MySection
            id="projects"
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
                >Projects</h1>
                <div className=""
                    style={{
                        maxWidth: '70vw',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '4vw',
                        // gridTemplateRows: 'repeat(3, auto)'
                    }}
                >
                    {projects.map((p, index) => (
                        <Project
                            key={p.title}
                            title={p.title}
                            description={p.description}
                            document_url={p.document_url}
                        />
                    ))}
                </div>
            </div>
        </MySection>
    )
}