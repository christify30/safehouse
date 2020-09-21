/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'
import { Icon, Text } from 'components'
import { theme, ThemeProps } from 'theme'

interface NavigationLinkProps {
  icon: string
  text: string
  link?: string
  className?: string
  active?: boolean
}

export const NavigationLink = (props: NavigationLinkProps) => {
  const { icon, text, className } = props
  const classes = styles({ ...props, theme })

  return (
    <div css={classes.wrapper} className={className}>
      <Icon css={classes.marginRight} icon={icon} width={18} />
      <Text text={text} />
    </div>
  )
}

const styles = (props: NavigationLinkProps & ThemeProps) => ({
  wrapper: css`
    background-color: ${props.active
      ? theme.getColor('primary', 400)(props)
      : ''};
    cursor: pointer;
    padding: 15px;
    color: ${props.active
      ? theme.getColor('grey', 100)(props)
      : theme.getColor('light', 500)(props)};
    border-top: 0.2px solid ${theme.getColor('light', 400)(props)};
    border-bottom: 0.2px solid ${theme.getColor('light', 400)(props)};
    svg {
      path.color-primary {
        &.color-fill {
          fill: ${props.active
            ? theme.getColor('grey', 100)(props)
            : theme.getColor('light', 500)(props)};
        }
        &.color-stroke {
          stroke: ${props.active
            ? theme.getColor('grey', 100)(props)
            : theme.getColor('light', 500)(props)};
        }
      }
    }
    &:hover {
      background-color: ${theme.getColor('primary', 400)(props)};
      color: ${theme.getColor('grey', 100)(props)};
      svg {
        path.color-primary {
          &.color-fill {
            fill: ${theme.getColor('grey', 100)(props)};
          }
          &.color-stroke {
            stroke: ${theme.getColor('grey', 100)(props)};
          }
        }
      }
    }
  `,
  marginRight: css`
    margin-right: 12px;
  `,
})
