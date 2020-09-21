/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { iconList } from './IconList'
import { theme, ThemeProps } from 'theme'

interface IconColor {
  type?: string
  shade?: number
}

interface IconProps {
  icon: string
  width?: number
  height?: number
  color?: IconColor
  className?: string
  onClick?: () => void
}

export const Icon = (props: IconProps) => {
  const { icon, className, onClick } = props
  const classes = styles({ ...props, theme })
  const IconTag = iconList[icon]
  return (
    <span css={classes.wrapper} className={className} onClick={onClick}>
      <IconTag />
    </span>
  )
}

const styles = (props: IconProps & ThemeProps) => ({
  wrapper: css`
    vertical-align: middle;
    > svg {
      width: ${props.width ? `${props.width}px` : 'auto'};
      height: ${props.height ? `${props.height}px` : 'auto'};
      path.color-primary {
        &.color-fill {
          fill: ${props.color
            ? theme.getColor(props.color.type, props.color.shade)(props)
            : ''};
        }
        &.color-stroke {
          stroke: ${props.color
            ? theme.getColor(props.color.type, props.color.shade)(props)
            : ''};
        }
      }
    }
  `,
})
