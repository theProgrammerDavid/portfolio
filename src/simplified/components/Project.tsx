import React from 'react'
import { MyProject } from '.'
import { ThemeContext } from '../../context';
import { iContext, Project } from '../../models'
import { getTheme, THEMES } from '../../theme'
import { debounce } from '../../util';

function executeFnAfter(fn: any, delay: number) {
    setTimeout(fn, delay);
}

export function Project(props: Project) {
    const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;
    const [hoverEnabled, setHoverEnabled] = React.useState<boolean>(false);

    const toggleHover = debounce(() => { setHoverEnabled(!hoverEnabled)}, 200);

    return (

        <MyProject
            color={THEMES.BG_MID_DARK}
            onMouseEnter={() => toggleHover()}
            onMouseLeave={() => setHoverEnabled(false)}
        >
            <div
                style={{
                    fontFamily: '"FiraCode", "monospace"',
                    fontSize: '2rem',
                    color: THEMES.TEXT,
                    transition: '1s'
                }}
            >{props.title}</div>
            <div
                style={{
                    fontSize: '1.5em',
                    display: hoverEnabled ? "block" : "none",
                    fontFamily: '"FiraCode", "monospace"'
                }}
            >
                <hr className="uk-divider-small" />
                {props.description}</div>
        </MyProject>
    )
}