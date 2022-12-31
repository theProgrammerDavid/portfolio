import React from 'react'
import { experience, experienceColorArray, projects, publications } from '../../constants'
import { ThemeContext } from '../../context';
import { iContext } from '../../models';
import { getTheme, THEMES } from '../../theme';
import { ExperienceItem, MySection, Project } from '../components'
import { PublicationItem } from '../components/PublicationItem';

export function Publications() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;

    return (
        <MySection
            id="publications"
            // height={'90vh'}
            className="section"
            backgroundColor={getTheme(currentTheme)}
        >
            <div >
                <h1 className="uk-heading-xlarge"
                    style={{
                        textAlign: 'center',
                        color: THEMES.BG_HEADING,
                        marginBottom: '4vw',
                        fontWeight: 'lighter'
                    }}
                >Publications</h1>
                <div className=""
                    style={{
                        maxWidth: '70vw',
                        gap: '4vw',
                    }}
                >
                    {publications.map((p, index) => (
                        <PublicationItem
                            key={p.name}
                            name={p.name}
                            url={p.url}
                            open={index === 0}
                            abstract={p.abstract}
                            doi={p.doi}
                        />
                    ))}
                </div>
            </div>
        </MySection>
    )
}
