/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { theme, ThemeProps } from 'theme'

interface TextProps {
  text: string
  size?: string
  color?: TextColor
  className?: string
}

interface TextColor {
  type?: string
  shade?: number
}

export const Text = (props: TextProps) => {
  const { text, className } = props
  const classes = styles({ ...props, theme })
  return (
    <span className={className} css={classes.wrapper}>
      {text}
    </span>
  )
}

const styles = (props: TextProps & ThemeProps) => ({
  wrapper: css`
    font-family: ${theme.getFont('primary')(props)};
    font-size: ${theme.getFontSize(props.size)(props)};
    color: ${props.color
      ? theme.getColor(props.color.type, props.color.shade)(props)
      : ''};
  `,
})
