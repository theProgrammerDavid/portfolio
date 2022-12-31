import React from 'react'
import { achievements, experience, experienceColorArray, projects, publications } from '../../constants'
import { ThemeContext } from '../../context';
import { Achievement, iContext } from '../../models';
import { getTheme, THEMES } from '../../theme';
import { getUrlLinkFromCert } from '../../util';
import { ExperienceItem, MySection, Project } from '../components'
import { PublicationItem } from '../components/PublicationItem';

// declare var convertPdfToImageString: any;

export function Achievements() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;

    return (
        <MySection
            id="achievements"
            height={'115vh'}
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
                >Achievements</h1>
                <div
                    style={{
                        maxWidth: '70vmax',
                        width: '70vmax',
                        gap: '4vw',
                        border: `1px solid ${THEMES.BORDER_COLOR}`,
                        padding: '2em'
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
                                marginTop: '1em',
                            }}
                            className="">
                            <ul
                                className="uk-slideshow-nav uk-dotnav"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </MySection>
    )
}
