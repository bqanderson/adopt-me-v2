import React from 'react'
import { Link } from '@reach/router'
import { css, keyframes } from '@emotion/core'
import colors from './colors'

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`

const NavBar = () => (
  <header
    css={css`
      background-color: ${colors.secondary};
      padding: 15px;
      margin: 25px auto;
      border-radius: 9px;
    `}
  >
    <Link to='/'>Adopt Me!</Link>
    <span
      css={css`
        font-size: 60px;
        display: inline-block;
        animation: 3s ${spin} linear infinite;

        &:hover {
          cursor: default;
          animation: 0.125s ${spin} linear infinite reverse;
        }
      `}
      role='img'
      aria-label='logo'
    >
      🐕
    </span>
  </header>
)

export default NavBar
