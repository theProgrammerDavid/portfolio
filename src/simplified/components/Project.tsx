import React from 'react'
import { isMobile } from '../../mobile';
import { Project } from '../../models'
import { THEMES } from '../../theme'
import { getUrlLinkFromCert, moderateScale } from '../../util';

export function Project(props: Project) {

    const [showMenu, setShowMenu] = React.useState<boolean>(false);

    return (
        <div
            className="project-card card"
            onMouseLeave={() => setShowMenu(false)}
            style={{
                minWidth: moderateScale(200),
                minHeight: moderateScale(100),
            }}
        >
            <div className="wrapper"
                style={{
                    backgroundColor: THEMES.BG_MID_DARK,
                    backgroundImage: ``,
                    backgroundSize: 'contain',
                    backgroundRepeat: "no-repeat",
                    minHeight: moderateScale(100),
                }}
            >
                <div className="url"
                    style={{
                        backgroundColor: THEMES.BG_HEADING,
                    }}
                >
                    <a href={getUrlLinkFromCert(props.document_url)}><i
                        style={{
                            fontSize: moderateScale(isMobile() ? 10 : 10),
                            color: THEMES.TEXT
                        }}
                        className="fab fa-github"></i></a>
                </div>
                <div className="data">
                    <div className="content">
                        <h1 className="title"><a href="#"
                            style={{
                                fontFamily: '"Fira Code", "monospace"',
                                textDecoration: 'none'
                            }}
                        >{props.title}</a></h1>
                        <p className="text"
                            style={{
                                color: THEMES.TEXT,
                                fontFamily: '"Fira Code", "monospace"'
                            }}
                        >{props.description}</p>
                        <label
                            htmlFor={`show-menu-${props.No}`}
                            className="menu-button"><span></span></label>
                    </div>
                    <input type="checkbox" id={`show-menu-${props.No}`}
                        checked={showMenu}
                        onClick={() => setShowMenu(true)}
                    />
                    <ul
                        style={{
                            display: showMenu ? "block" : "none",
                        }}
                        className="menu-content">
                        {/* <li><a href="#"><i className="fab fa-github"></i></a></li>
                        <li><a href="#"><i className="fab fa-html5"></i></a></li>
                        <li><a href="#"><i className="fab fa-css3-alt"></i></a></li>
                        <li><a href="#"><i className="fab fa-js"></i></a></li> */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: "space-around"
                        }}>
                            {props.languageIconArray?.map((icon, index) => (<li key={icon}><a href="#"><i
                                style={{
                                    color: THEMES.TEXT
                                }}
                                className={`fab fa-${icon === "c++" ? "cuttlefish" : icon}`}>{icon === "c++" ? "++" : ""}</i></a></li>))}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}