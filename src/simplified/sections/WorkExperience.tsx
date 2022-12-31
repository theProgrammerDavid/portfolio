import React from 'react'
import { experience, experienceColorArray } from '../../constants'
import { ThemeContext } from '../../context';
import { iContext } from '../../models';
import { getTheme, THEMES } from '../../theme';
import { ExperienceItem, MySection } from '../components'

export function WorkExperience() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;

    return (
        <MySection
            id="workExperience"
            height={'140vh'}
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
                >Work Experience</h1>
                <div className=""
                    style={{
                        maxWidth: '70vw'
                    }}
                >
                    {experience.map((e, index) => (<ExperienceItem
                        key={index}
                        company={e.company}
                        description={e.description}
                        location={e.location}
                        position={e.position}
                        start={e.start}
                        end={e.end}
                        color={experienceColorArray[index]}
                        colorSep={experienceColorArray[index]}
                    />))}
                </div>
            </div>
        </MySection>
    )
}
