import styled from 'styled-components'

export const NavDots = styled.ul`
  position: fixed;
  top: 50%;
  left: 2em;
  transform: translateY(-50%);
  margin: 0;
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
  height: 100vh;
`