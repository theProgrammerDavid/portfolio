import React from 'react'
import { experience, experienceColorArray, projects, publications } from '../../constants'
import { ThemeContext } from '../../context';
import { isMobile } from '../../mobile';
import { iContext } from '../../models';
import { getTheme, THEMES } from '../../theme';
import { moderateScale } from '../../util';
import { ExperienceItem, MySection, Project } from '../components'
import { PublicationItem } from '../components/PublicationItem';

export function Publications() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;


    return (
        <MySection
            id="publications"
            // height={'90vh'}
            className="section uk-section"
            backgroundColor={getTheme(currentTheme)}
            style={{
                paddingTop: isMobile() ? moderateScale(200) : "inherit",
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
                >Publications</h1>
                <div className=""
                    style={{
                        maxWidth: isMobile() ? "inherit" : '70vw',
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
        </MySection >
    )
}
