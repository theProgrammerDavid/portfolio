import React from 'react'
import { frameworks, langs, other, socials } from '../../constants'
import { ThemeContext } from '../../context';
import { iContext } from '../../models';
import { getTheme } from '../../theme';
import { ChipsRow, MarkdownBadge, MyChip, MySection } from '../components'

export function AboutMe() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;

    return (
        <MySection
            id="aboutMe"
            // height='100vh'
            backgroundColor={getTheme(currentTheme)}
            className="section"
            style={{
                textAlign: 'center'
            }}
        >
            <div >
                <h1 className="uk-heading-xlarge"
                    style={{
                        color: '#444',
                        fontWeight: 'lighter'
                    }}
                >About Me</h1>
            </div>

            <ChipsRow>
                {socials.map((i, index) => <MarkdownBadge
                    key={index}
                    url={i.url}
                    alt={i.website}
                    markDownBadgeUrl={i.badgeUrl} />)}
            </ChipsRow>
            <p></p>

            <div className="uk-text-large"
                style={{
                    color: '#555',
                    maxWidth: '70vw',
                    fontFamily: '"FiraCode", "monospace"'
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
            </div>
            <div
                style={{
                    marginTop: '1em',
                    alignContent: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    maxWidth: '70vw',
                    gap: '1em'
                }}
            >
                {[...langs, ...frameworks, ...other].map((i, index) => <MarkdownBadge
                    key={i.name}
                    alt={i.name}
                    experience={i.experience!}
                    markDownBadgeUrl={i.url} />)}
            </div>

            <p
                style={{
                    color: '#555',
                    maxWidth: '70vw',
                    fontFamily: '"FiraCode", "monospace"'
                }}
            >Hover for Tooltip</p>
        </MySection>
    )
}
