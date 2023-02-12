import React from 'react'
import { experience, experienceColorArray, projects } from '../../constants'
import { ThemeContext } from '../../context';
import { isMobile } from '../../mobile';
import { iContext } from '../../models';
import { getTheme, THEMES } from '../../theme';
import { moderateScale } from '../../util';
import { ExperienceItem, MySection, Project } from '../components'

export function Projects() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;

    return (
        <MySection
            id="projects"
            // height={'180vh'}
            className="section uk-section"
            backgroundColor={getTheme(currentTheme)}
            style={{
                paddingTop: isMobile() ? "inherit" : moderateScale(50)
            }}
        >
            <div >
                <h1 className="uk-heading-large"
                    style={{
                        textAlign: 'center',
                        color: THEMES.BG_HEADING,
                        marginBottom: '4vw',
                        fontWeight: 'lighter'
                    }}
                >Projects</h1>
                <div className="scroll"
                    style={{
                        overflow: 'scroll',
                        overflowY: 'hidden',
                        paddingBottom: moderateScale(isMobile() ? 10 : 15)
                    }}
                >
                    <div className=""
                        style={{
                            width: moderateScale(isMobile() ? 20 : 500),
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '3rem',
                        }}
                    >
                        {projects.map((p, index) => (
                            <Project
                                No={index}
                                key={p.title}
                                title={p.title}
                                description={p.description}
                                document_url={p.document_url}
                                languageIconArray={p.languageIconArray}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </MySection>
    )
}
