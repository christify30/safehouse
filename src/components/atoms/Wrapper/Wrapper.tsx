/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { theme, ThemeProps } from 'theme'

interface WrapperProps {
  size?: string
  className?: string
  children?: React.ReactNode
  display?: string
}

export const Wrapper = (props: WrapperProps) => {
  const { className, children } = props
  const classes = styles({ ...props, theme })
  return (
    <div className={className} css={classes.wrapper}>
      {children}
    </div>
  )
}

const styles = (props: WrapperProps & ThemeProps) => ({
  wrapper: css`
    
  `,
})
