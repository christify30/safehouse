/** @jsx jsx */
import * as React from 'react'
import { jsx, css, keyframes } from '@emotion/core'
import { theme, ThemeProps } from 'theme'
import { Text } from 'components'

export const Loader = () => {
  const classes = styles({ theme })
  return (
    <section>
      <div css={classes.wrapper}>
        <div
          css={css`
            background-color: #62e000;
            width: 80%;
            height: 7px;
            animation: ${loaderAnimation} 2s ease-in-out infinite;
          `}></div>
      </div>
      <Text text="Loading..." />
    </section>
  )
}

const styles = (props: ThemeProps) => ({
  wrapper: css`
    width: 100%;
    background-color: ${theme.getColor('grey', 200)(props)};
    height: 7px;
  `,
})

const loaderAnimation = keyframes`
    from, 0% {
        transform: translateX(0)
    }
    50% {
        transform: translateX(25%)
    }
    100% {
        transform: translateX(0)
    }
`
