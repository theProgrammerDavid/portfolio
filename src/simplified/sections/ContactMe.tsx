import React from 'react'
import { ThemeContext } from '../../context';
import { iContext } from '../../models';
import { getTheme, THEMES } from '../../theme';
import { BlogItem, ExperienceItem, MySection } from '../components'

export function ContactMe() {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;

    return (
        <MySection
            id="contactMe"
            height={'40vh'}
            className="section"
            backgroundColor={getTheme(currentTheme)}
        >
            <div >
                <h1 className="uk-heading-xlarge"
                    style={{
                        textAlign: 'center',
                        color: THEMES.BG_HEADING,
                        marginBottom: '4vmax',
                        fontWeight: 'lighter'
                    }}
                >Contact Me</h1>
                <div
                    style={{
                        marginTop: '5vmax',
                        fontFamily: '"Fira Code", "monospace"'
                    }}
                >
                    <form>
                        <fieldset className="uk-fieldset">
                            <div className="uk-margin">
                                <input
                                    style={{
                                        backgroundColor: THEMES.BG_DARK,
                                        background: THEMES.BG_DARK,
                                        border: `1px solid ${THEMES.TEXT}`,
                                        color: THEMES.TEXT
                                    }}
                                    className="uk-input"
                                    type="text"
                                    placeholder="Name"
                                    aria-label="Input"
                                />
                            </div>

                            <div className="uk-margin">
                                <input
                                    style={{
                                        backgroundColor: THEMES.BG_DARK,
                                        background: THEMES.BG_DARK,
                                        border: `1px solid ${THEMES.TEXT}`,
                                        color: THEMES.TEXT
                                    }}
                                    className="uk-input"
                                    type="text"
                                    placeholder="Email"
                                    aria-label="Input"
                                />
                            </div>

                            <div className="uk-margin">
                                <textarea
                                    style={{
                                        backgroundColor: THEMES.BG_DARK,
                                        background: THEMES.BG_DARK,
                                        border: `1px solid ${THEMES.TEXT}`,
                                        color: THEMES.TEXT
                                    }}
                                    className="uk-textarea"
                                    rows={5} placeholder="Message"
                                    aria-label="Textarea"></textarea>
                            </div>
                            <div
                                style={{
                                    border: `1px solid ${THEMES.TEXT}`,
                                    color: THEMES.TEXT,
                                    width: '100%'
                                }}
                                className="uk-button">Submit</div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </MySection>
    )
}
