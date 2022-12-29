import React from 'react';
import styled from 'styled-components'

import { iCircle, iMarkdownBadge, iMyChip, iMySection } from '../../models';

export * from './ExperienceItem'
export * from './MyNavBar'
export * from './MarkdownBadge'
export * from './Project';
export * from './BlogItem';

export const NavDots = styled.ul`
  position: fixed;
  top: 50%;
  left: 2em;
  transform: translateY(-50%);
  margin: 0;
  margin-right: 10px;
  padding: 0;
  cursor: pointer;
  `

export const NavDot = styled.li`
  width: 12px;
  height: 12px;
  border: 2px solid #52616a;
  border-radius: 50%;
  list-style: none;
  background: #c9d6de;
  transition: all 0.3s;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  &:hover,
  &.is-active {
    transform: scale(1.8);
    background: transparent;
  }
  `
export const MySection = styled.section`
  display: grid;
  justify-content: center;
  align-content: center;
  height: ${(props: iMySection) => props.height ?? '100vh'};
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
  background-color: #444;
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
  gap: 1em;
`

export const Circle = styled.div`
  width: ${(props: iCircle) => props.radius};
  height: ${(props: iCircle) => props.radius};
  background: ${(props: iCircle) => props.color};
  border-radius: 50%
`