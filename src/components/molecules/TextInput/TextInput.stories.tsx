import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { TextInput } from './TextInput'

const onChange = () => {}

storiesOf('TextInput', module).add('Default', () => (
  <TextInput
    name="username"
    type="text"
    placeholder="Username"
    onChange={onChange}
    value={text('value', '')}
    error={text('error', '')}
  />
))
