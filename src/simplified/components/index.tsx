import React from 'react';
import styled from 'styled-components'

import { iCircle, iMarkdownBadge, iMyChip, iMyProject, iMySection } from '../../models';
import { THEMES } from '../../theme';

export * from './ExperienceItem'
export * from './MyNavBar'
export * from './MarkdownBadge'
export * from './Project';
export * from './BlogItem';

export const MySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: ${(props: iMySection) => props.height ?? "100vh"};
  // padding: ${(props: iMySection) => props.height ?? '50vh'} 0 ${(props: iMySection) => props.height ?? '50vh'} 0;
  background-color: ${(props: iMySection) => props.backgroundColor ?? 'inherit'};
`
export const IntroText = styled.span`
background: linear-gradient(90deg,#ff6b6b,#8181fb);
background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 4px transparent;
color: #222;
font-size: 10rem;
//  animation: 3s ease-out 0s 1 introName;
`

export const NavBar = styled.section`
font-family: 'Fira Code';
`
export const NavItem = styled.span`
  color: #555;

  &:hover{
    color: #888;
  }
`

export const Chip = styled.div`
  display: inline-block;
  padding: 0 25px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: ${THEMES.BG_HEADING};
  color: #aaa;
`
export const ChipImg = styled.img`
  float: left;
  margin: 0 10px 0 -25px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`

export function MyChip(props: iMyChip) {

  return (<Chip>
    {props.url && <ChipImg
      width={props.imgWidth}
      height={props.imgHeight}
    />}{props.content}</Chip>)
}


export const ChipsRow = styled.div`
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 70vw;
  gap: 1rem;
`

export const Circle = styled.div`
  width: ${(props: iCircle) => props.radius};
  height: ${(props: iCircle) => props.radius};
  background: ${(props: iCircle) => props.color};
  border-radius: 50%
`



export const MyProject = styled.div`
  width: 30rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: ${(props: iMyProject) => props.color};
`