import React from 'react'
import { projects } from '../../constants'
import { ThemeContext } from '../../context';
import { isMobile } from '../../mobile';
import { iContext } from '../../models';
import { getTheme, THEMES } from '../../theme';
import { moderateScale } from '../../util';
import { MySection, Project } from '../components'

export function Projects() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;

    return (
        <MySection
            id="projects"
            // height={'180vh'}
            className="section uk-section"
            backgroundColor={getTheme(currentTheme)}
            style={{
                paddingTop: isMobile() ? moderateScale(600) : "inherit",
            }}
        >
            <div >
                <h1 className="uk-heading-large"
                    style={{
                        textAlign: 'center',
                        color: THEMES.BG_HEADING,
                        marginBottom: '4vw',
                        fontWeight: 'lighter',
                        width: isMobile() ? moderateScale(200) : "inherit"
                    }}
                >Projects</h1>
                <div className="scroll"
                    style={{
                        overflow: 'scroll',
                        overflowY: 'hidden',
                        paddingBottom: moderateScale(isMobile() ? 20 : 15)
                    }}
                >
                    <div className=""
                        style={{
                            width: moderateScale(isMobile() ? 30 : 500),
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '3em',
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
                                pictureUrl={p.pictureUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </MySection>
    )
}
