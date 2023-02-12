import React from 'react'
import styled from 'styled-components'
import { MySection, IntroText, MyChip, MarkdownBadge } from '../components'
import { socials } from '../../constants'
import { ThemeContext } from '../../context'
import { iContext } from '../../models'
import { getTheme, THEMES } from '../../theme'
import { moderateScale } from '../../util'


export function LandingSection() {
  const { changeTheme, currentTheme } = React.useContext(ThemeContext) as iContext;

  return (
    <MySection
      id="landingPage"
      className='uk-section uk-section-xlarge'
      backgroundColor={getTheme(currentTheme)}
    >
      <div
        className="name"
        style={{
          'background': 'linear-gradient(90deg,#ff6b6b,#8181fb)',
          'backgroundClip': 'text',
          'WebkitBackgroundClip': 'text',
          'WebkitTextStroke': '4px transparent',
          color: getTheme(currentTheme),
          fontSize: moderateScale(37),
          fontFamily: '"AnuratiRegular", "Fira Code", "monospace"',
          animation: '3s cubic-bezier(.48,1.2,1,1.01) 0s 1 normal none running introName'
          // animation: '3s ease-out 0s 1 introName'
        }}
      >DAV I D V E L H O</div>
    </MySection>
  )
}
