import React from 'react'
import { achievements, experience, experienceColorArray, projects, publications } from '../../constants'
import { ThemeContext } from '../../context';
import { isMobile } from '../../mobile';
import { Achievement, iContext } from '../../models';
import { getTheme, THEMES } from '../../theme';
import { getUrlLinkFromCert, moderateScale } from '../../util';
import { ExperienceItem, MySection, Project } from '../components'
import { PublicationItem } from '../components/PublicationItem';

// declare var convertPdfToImageString: any;

export function Achievements() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;

    return (
        <MySection
            id="achievements"
            // height={'115vh'}
            className="section uk-section"
            backgroundColor={getTheme(currentTheme)}
        >
            <div >
                <div>
                    <h1 className="uk-heading-large uk-margin"
                        style={{
                            textAlign: 'center',
                            color: THEMES.BG_HEADING,
                            fontWeight: 'lighter'
                        }}
                    >Achievements</h1>
                </div>
                <div
                    style={{
                        // maxWidth: '70vmax',
                        width: isMobile() ? 'inherit' : moderateScale(350),
                        gap: '4vw',
                        border: `1px solid ${THEMES.BORDER_COLOR}`,
                        // padding: '2em'
                    }}
                >
                    <div
                        className="uk-position-relative uk-visible-toggle uk-light"
                        tabIndex={-1}
                        uk-slideshow="true">

                        <ul
                            className="uk-slideshow-items">
                            {achievements.map((i, index) => <li key={i.title} uk-lightbox="true">

                                <div>
                                    <a
                                        className="uk-inline"
                                        href={getUrlLinkFromCert(i.document_url)}
                                        data-caption={i.title}>
                                        <img
                                            src={getUrlLinkFromCert(i.document_url)}
                                            width="1800"
                                            height="1200"
                                            alt="" />
                                    </a>
                                </div>
                            </li>)}
                        </ul>

                        <a
                            className="uk-position-center-left uk-position-small uk-hidden-hover"
                            href="#"
                            uk-slidenav-previous="true"
                            uk-slideshow-item="previous"
                        ></a>
                        <a
                            className="uk-position-center-right uk-position-small uk-hidden-hover"
                            href="#"
                            uk-slidenav-next="true"
                            uk-slideshow-item="next"
                        ></a>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '1rem',
                            }}
                            className="">
                            <ul className="uk-slideshow-nav uk-dotnav"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </MySection>
    )
}
