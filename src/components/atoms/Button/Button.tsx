/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { Icon } from '../Icon'
import { theme, ThemeProps } from 'theme'
import { noop } from 'lodash'

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button'
  styleType?: string
  icon?: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export const Button = (props: ButtonProps) => {
  const { type, children, icon: iconImage, onClick = noop, className } = props
  const classes = styles({ ...props, theme })
  return (
    <button
      css={classes.button}
      onClick={onClick}
      type={type}
      className={className}>
      <div css={classes.buttonItems}>
        {iconImage && <Icon css={classes.icon} icon={iconImage} width={20} />}
        {children}
      </div>
    </button>
  )
}

const styles = (props: ButtonProps & ThemeProps) => ({
  button: css`
    padding: 5px 25px;
    background-color: ${props.styleType === 'primary'
      ? theme.getColor('primary', 500)(props)
      : theme.getColor('light', 500)(props)};
    color: ${props.styleType === 'primary'
      ? theme.getColor('light', 500)(props)
      : theme.getColor('dark', 400)(props)};
    border: ${props.styleType === 'primary'
      ? '0px'
      : `1px solid ${theme.getColor('grey', 400)(props)}`};
    font-size: ${theme.getFontSize('regular')(props)};
    letter-spacing: 1px;
    font-family: ${theme.getFont('primary')(props)};
    cursor: pointer;
    outline: 0;
    width: 100%;
    height: 45px;
    &:hover {
      background-color: ${props.styleType === 'primary'
        ? theme.getColor('primary', 300)(props)
        : ''};
      color: ${props.styleType === 'secondary'
        ? theme.getColor('primary', 400)(props)
        : ''};
      svg {
        path {
          fill: ${props.styleType === 'secondary'
            ? theme.getColor('primary', 400)(props)
            : ''};
        }
      }
    }
    &:active {
      background-color: ${props.styleType === 'primary'
        ? theme.getColor('primary', 500)(props)
        : theme.getColor('grey', 400)(props)};
    }
    svg path {
      fill: ${props.styleType === 'primary'
        ? theme.getColor('light', 500)(props)
        : theme.getColor('dark', 500)(props)};
    }
  `,
  icon: css`
    margin-right: 8px;
  `,
  buttonItems: css`
    display: flex;
    align-items: end;
  `,
})
