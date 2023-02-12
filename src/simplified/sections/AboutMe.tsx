import React from 'react'
import { frameworks, langs, other, socials } from '../../constants'
import { ThemeContext } from '../../context';
import { isMobile } from '../../mobile';
import { iContext } from '../../models';
import { getTheme, THEMES } from '../../theme';
import { moderateScale, scale, verticalScale } from '../../util';
import { ChipsRow, MarkdownBadge, MyChip, MySection } from '../components'
import BuyMeACoffee from '../components/BuyMeACoffee';

export function AboutMe() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;

    return (
        <MySection
            id="aboutMe"
            // height='100vh'
            backgroundColor={getTheme(currentTheme)}
            className="section uk-section"
            style={{
                textAlign: 'center',
                justifyContent: "flex-start",
                paddingTop: isMobile() ? "inherit" : moderateScale(60)
            }}
        >
            <div >
                <h1 className="uk-heading-large"
                    style={{
                        color: THEMES.BG_HEADING,
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

            <div className="uk-padding"
                style={{
                    color: '#555',
                    maxWidth: '70vw',
                    fontSize: moderateScale(isMobile() ? 10 : 7),
                    fontFamily: '"FiraCode", "monospace"'
                }}
            >
                Lorem ipsum dolor sit amet just kidding. You thought I forgot to replace the placeholder text huh? I'm David, a full stack and systems dev . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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

            <p>
                <p
                    style={{
                        color: '#555',
                        fontSize: moderateScale(isMobile() ? 10 : 5),
                        fontFamily: '"FiraCode", "monospace"'
                    }}
                >If you like my work, please consider supporting me at - </p>
                <BuyMeACoffee />
            </p>

            {/* <p
                style={{
                    color: '#555',
                    // maxWidth: '70vw',
                    fontFamily: '"FiraCode", "monospace"'
                }}
            >Hover for Tooltip</p> */}
        </MySection>
    )
}
