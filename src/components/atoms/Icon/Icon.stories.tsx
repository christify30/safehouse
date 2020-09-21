/** @jsx jsx */
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import { css, jsx } from '@emotion/core'

import { Icon, iconList } from './'

storiesOf('Icon', module)
  .add('Icon', () => (
    <Icon
      icon={text('Icon', 'save')}
      width={number('Width', 20)}
      color={{
        type: text('Color', 'dark') || undefined,
        shade: number('Shade', 500) || undefined,
      }}
    />
  ))
  .add('Icon List', () => (
    <div css={style.wrapper}>
      {Object.keys(iconList).map(iconKey => (
        <div key={iconKey} css={style.icon}>
          <Icon
            icon={iconKey}
            height={20}
            color={{
              type: text('Color', 'dark') || undefined,
              shade: number('Shade', 500) || undefined,
            }}
          />
          <span css={style.label}>{iconKey}</span>
        </div>
      ))}
    </div>
  ))

const style = {
  wrapper: css`
    display: flex;
    flex-direction: row;
  `,
  icon: css`
    border: 1px solid #cccccc;
    display: flex;
    flex-direction: column;
    flex: 0 0 80px;
    height: 80px;
    padding: 10px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    &:not(:last-child) {
      border-right: 0px;
    }
  `,
  label: css`
    margin-top: 10px;
  `,
}
