import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'

import { Text } from './Text'

storiesOf('Text', module).add('Default', () => (
  <Text
    text={text('text', 'Example text')}
    size={text('size', '14px')}
    color={{
      type: text('Color', 'dark'),
      shade: number('Shade', 500),
    }}
  />
))
