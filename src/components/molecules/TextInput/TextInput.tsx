/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { theme, ThemeProps } from 'theme'
import { Text } from 'components'

interface TextInputProps {
  name: string
  type: string
  placeholder: string
  error: string
  value: string
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput = (props: TextInputProps) => {
  const { name, type, placeholder, error, value, onChange, disabled } = props
  const classes = styles({ ...props, theme })

  return (
    <div css={classes.inputWrapper}>
      <input
        css={classes.inputStyle}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
      <label css={classes.label} htmlFor={name}>
        {placeholder}
      </label>
      {error && (
        <Text
          size={'small'}
          color={{
            type: 'error',
            shade: 400,
          }}
          text={error}
        />
      )}
    </div>
  )
}

const styles = (props: TextInputProps & ThemeProps) => ({
  inputWrapper: css`
    width: 100%;
    margin-bottom: 20px;
    position: relative;
  `,
  inputStyle: css`
    position: relative;
    font-family: ${theme.getFont('primary')(props)};
    font-size: ${theme.getFontSize('regular')(props)};
    border-style: none;
    background: transparent;
    outline: none;
    padding: 8px 0;
    color: ${theme.getColor('dark', 500)(props)};
    border-bottom: ${props.error
      ? `1px solid ${theme.getColor('error', 400)(props)}`
      : `1px solid ${theme.getColor('grey', 400)(props)}`};
    width: 100%;
    cursor: ${props.disabled && 'not-allowed'};

    &:placeholder-shown + label {
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
    }
  `,
  label: css`
    color: ${theme.getColor('grey', 300)(props)};
    font-family: ${theme.getFont('primary')(props)};
    font-size: ${theme.getFontSize('medium')(props)};
    display: block;
    transition: all 0.3s;
    position: absolute;
    top: -10px;
    left: 0;
  `,
})
