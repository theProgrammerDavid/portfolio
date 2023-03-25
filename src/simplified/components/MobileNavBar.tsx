import React from 'react'
import { navBarData } from '../../constants'
import { moderateScale } from '../../util'

function MobileNavBar() {
    return (
        <>
            <a href=""
                uk-toggle="target: #myNavBar "
                style={{
                    position: 'absolute',
                    left: moderateScale(20),
                    top: moderateScale(20)
                }}
                className="uk-icon-link" uk-icon="menu"></a>

            <div id="myNavBar" uk-offcanvas="overlay: true">
                <div className="uk-offcanvas-bar uk-flex uk-flex-column">

                    <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                        {/* <li className="uk-active"><a href="#">Active</a></li> */}
                        <li className="uk-parent">
                            {/* <a href="#">Parent</a> */}
                            <ul className="uk-nav-sub">
                                {navBarData.map((i, index) => (<li
                                    onClick={() => document.getElementById(i.idTag)!.scrollIntoView({
                                        behavior: 'smooth',
                                        block: "center"
                                    })
                                    }
                                    key={index}><a href="#">{i.name}</a></li>))}
                                <li><a href="#">Sub item</a></li>
                                <li><a href="#">Sub item</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default MobileNavBar