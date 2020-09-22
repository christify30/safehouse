/** @jsx jsx */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'

import { Icon, Text } from 'components'
import { ThemeProps, theme } from 'theme'

export interface ListProp {
  id: number | string
  name: string
}

interface SelectProps {
  placeholder: string
  list: ListProp[]
  name: string
  value: any
  error?: string
  setFieldValue: any
}

export const Select = (props: SelectProps) => {
  const [listOpen, setListOpen] = useState(false)
  const classes = styles({ ...props, theme })
  const { placeholder, name, list, error, setFieldValue, value } = props

  let valueString = placeholder
  if (value) {
    const option = list.find(item => item.id === value)
    if (option) {
      valueString = option.name
    }
  }

  const toggleList = () => {
    setListOpen(!listOpen)
  }

  const toggle = (item: ListProp) => {
    toggleList()
    setFieldValue(name, item.id)
  }

  return (
    <div css={classes.wrapper}>
      <div css={classes.header} onClick={toggleList}>
        <Text css={classes.title} text={valueString} />
        <Icon
          css={classes.icon}
          color={{ type: 'grey', shade: 400 }}
          icon={listOpen ? 'arrowUp' : 'arrowDown'}
          width={14}
        />
      </div>
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
      {listOpen && (
        <ul css={classes.list}>
          {list.map((item: ListProp) => (
            <li key={item.id} onClick={() => toggle(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const styles = (props: ThemeProps & SelectProps) => ({
  wrapper: css`
    font-family: ${theme.getFont('primary')(props)};
    font-size: ${theme.getFontSize('regular')(props)};
    color: ${theme.getColor('grey', 300)(props)};
    width: 100%;
    margin-bottom: 20px;
  `,
  header: css`
    border-bottom: ${props.error
      ? `1px solid ${theme.getColor('error', 400)(props)}`
      : `1px solid ${theme.getColor('grey', 400)(props)}`};
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
  `,
  title: css``,
  icon: css`
    margin-left: auto;
    cursor: pointer;
  `,
  list: css`
    border: 1px solid ${theme.getColor('grey', 400)(props)};
    list-style: none;
    margin: 0;
    padding-inline-start: 0;
    li {
      padding: 10px;
      cursor: pointer;
      list-style: none;
      &:not(:last-child) {
        border-bottom: 1px solid ${theme.getColor('grey', 400)(props)};
      }
      &:hover {
        color: ${theme.getColor('primary', 400)(props)};
      }
    }
  `,
})
