/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { Header } from 'components'

storiesOf('Header', module).add('Default', () => (
  <div>
    <Header title="User" />
  </div>
))
