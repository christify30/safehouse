/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { theme, ThemeProps } from 'theme'
import { Text } from 'components'

interface TextInputProps {
  name: string
  type: string
  min?: string
  max?: string
  multiple?:boolean
  accept?: string 
  placeholder: string
  error?: string
  value: string
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const TextInput = (props: TextInputProps) => {
  const {
    name,
    type,
    placeholder,
    min,
    max,
    multiple,
    accept,
    error,
    value,
    onChange,
    onKeyDown,
    disabled,
  } = props
  const classes = styles({ ...props, theme })

  return (
    <div css={classes.inputWrapper}>
      <input
        css={classes.inputStyle}
        placeholder={placeholder}
        type={type}
        name={name}
        min={min}
        max={max}
        multiple = {multiple}
        accept = {accept}
        onChange={onChange}
        value={value}
        disabled={disabled}
        onKeyDown={onKeyDown}
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
