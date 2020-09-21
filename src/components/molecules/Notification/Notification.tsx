/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { theme, ThemeProps } from 'theme'
import { Icon, Text } from 'components'

interface NotificationProps {
  text: string
  notificationType: string
  onClose?: any
  className?: string
}

export const Notification = (props: NotificationProps) => {
  const { text, notificationType, onClose, className } = props
  const classes = styles({ ...props, theme })

  return (
    <div css={classes.wrapper} className={className}>
      <Icon
        css={classes.spaceRight}
        icon={notificationType}
        color={
          notificationType === 'info'
            ? { type: 'dark', shade: 500 }
            : { type: 'light', shade: 500 }
        }
      />
      <Text css={classes.message} text={text} />
      <Icon
        css={classes.close}
        icon="close"
        color={{ type: 'light', shade: 500 }}
        onClick={onClose}
      />
    </div>
  )
}

const styles = (props: NotificationProps & ThemeProps) => ({
  wrapper: css`
    display: flex;
    flex-direction: row;
    background-color: ${props.notificationType === 'success'
      ? theme.getColor('success', 400)(props)
      : props.notificationType === 'error'
      ? theme.getColor('error', 400)(props)
      : theme.getColor('grey', 200)(props)};
    padding: 10px;
    color: ${props.notificationType === 'info'
      ? theme.getColor('dark', 500)(props)
      : theme.getColor('light', 500)(props)};
    font-family: ${theme.getFont('primary')(props)};
  `,
  message: css`
    margin-left: 20px;
  `,
  close: css`
    margin-left: auto;
    cursor: pointer;
    opacity: 0.35;
  `,
  spaceRight: css`
    margin-right: 10px;
  `,
})
