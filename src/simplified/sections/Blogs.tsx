import React from 'react'
import { blogLinks, experience, experienceColorArray } from '../../constants'
import { ThemeContext } from '../../context';
import { isMobile } from '../../mobile';
import { iContext } from '../../models';
import { getTheme, THEMES } from '../../theme';
import { BlogItem, ExperienceItem, MySection } from '../components'

export function Blgos() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;

    return (
        <MySection
            id="blogs"
            height={'150vh'}
            className="uk-section section"
            backgroundColor={getTheme(currentTheme)}
        >
            <div >
                <h1 className="uk-heading-xlarge"
                    style={{
                        textAlign: 'center',
                        color: THEMES.BG_HEADING,
                        // marginBottom: '4vw',
                        fontWeight: 'lighter'
                    }}
                >Blogs</h1>
                <div className="uk-margin"
                    style={{
                        display: 'flex',
                        flexDirection: isMobile() ? "column" : "row",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {blogLinks.map((i, index) => (<BlogItem
                        open={true}
                        key={i.title}
                        title={i.title}
                        url={i.url} />))}
                </div>
            </div>
        </MySection>
    )
}
