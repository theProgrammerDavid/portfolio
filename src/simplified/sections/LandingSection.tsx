import React from 'react'
import styled from 'styled-components'
import { MySection, IntroText, MyChip, MarkdownBadge } from '../components'
import { socials } from '../../constants'


export function LandingSection() {
  return (
    <MySection
      id="landingPage"
      className='section'
      backgroundColor={'#222'}
    >
      <div
        className="name"
        style={{
          'background': 'linear-gradient(90deg,#ff6b6b,#8181fb)',
          'backgroundClip': 'text',
          'WebkitBackgroundClip': 'text',
          'WebkitTextStroke': '4px transparent',
          color: '#222',
          fontSize: '10em',
          fontFamily: '"AnuratiRegular", "Fira Code", "monospace"',
          animation: '3s cubic-bezier(.48,1.2,1,1.01) 0s 1 normal none running introName'
          // animation: '3s ease-out 0s 1 introName'
        }}
      >DAV I D V E L H O</div>
      <div
        className='uk-heading-small'
        style={{
          fontWeight: '200',
          color: '#444',
          textAlign: 'center',
          animation: '3s cubic-bezier(.48,1.2,1,1.01) 0s 1 normal none running introNameDesc'
        }}>David Velho</div>
    </MySection>
  )
}
