/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { NavigationLink } from './NavigationLink'

const NavigationList = [
  {
    url: '/users',
    icon: 'user',
    text: 'Users',
  },
  {
    url: '/department',
    icon: 'users',
    text: 'Departments',
  },
  {
    url: '/positions',
    icon: 'department',
    text: 'Positions',
  },
  {
    url: '/',
    icon: 'logout',
    text: 'Logout',
  },
]

storiesOf('Navigation Link', module)
  .add('Default', () => (
    <div css={styles.container}>
      <NavigationLink icon="user" text="Users" />
    </div>
  ))
  .add('List', () => (
    <div css={styles.container}>
      {NavigationList.map(item => {
        return (
          <NavigationLink
            icon={item.icon}
            text={item.text}
            css={styles.linkItem}
          />
        )
      })}
    </div>
  ))

const styles = {
  container: css`
    background-color: #1a1a1a;
    width: 400px;
  `,
  linkItem: css`
    border-top: 0.2px solid #232323;
    border-bottom: 0.2px solid #232323;
  `,
}
