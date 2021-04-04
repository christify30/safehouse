/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { theme, ThemeProps } from 'theme'

interface WrapperProps {
  children?: React.ReactNode
}

export const Wrapper = (props: WrapperProps) => {
  const { children } = props
  const classes = styles({ ...props, theme })
  return (
    <div css={classes.wrapper}>
      {children}
    </div>
  )
}

const styles = (props: WrapperProps & ThemeProps) => ({
  wrapper: css`
    display: flex;
  `,
})
