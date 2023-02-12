import React from 'react'
import { experience, experienceColorArray } from '../../constants'
import { ThemeContext } from '../../context';
import { isMobile } from '../../mobile';
import { iContext } from '../../models';
import { getTheme, THEMES } from '../../theme';
import { moderateScale } from '../../util';
import { ExperienceItem, MySection } from '../components'

export function WorkExperience() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;

    return (
        <MySection
            id="workExperience"
            // height={'140vh'}
            className="section uk-section"
            backgroundColor={getTheme(currentTheme)}
            style={{
                paddingTop: isMobile() ? "inherit" : moderateScale(80)
            }}
        >
            <div >
                <h1
                    className="uk-heading-large uk-padding-large uk-padding-remove-top"
                    style={{
                        textAlign: 'center',
                        color: THEMES.BG_HEADING,
                        // marginBottom: '4vw',
                        fontWeight: 'lighter'
                    }}
                >Work Experience</h1>
                <div className="scroll"
                    style={{
                        maxWidth: moderateScale(isMobile() ? 300 : 400),
                        height: isMobile() ? "inherit" : moderateScale(200),
                        overflow: isMobile() ? "inherit" : 'scroll',
                        overflowX: 'hidden'
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
