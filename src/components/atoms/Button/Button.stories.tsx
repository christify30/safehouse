import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

import { iconList } from '../'
import { Button } from './'

const styleTypes = {
  Primary: 'primary',
  Secondary: 'secondary',
}

const iconSelect = Object.keys(iconList).reduce(
  (acc: { [index: string]: string }, curr: string) => {
    acc[curr] = curr
    return acc
  },
  { none: '' }
)

storiesOf('Button', module).add('Button', () => (
  <div>
    <Button
      type="submit"
      icon={select('Icon', iconSelect, '')}
      styleType={select('Style', styleTypes, 'primary')}
      onClick={() => {}}>
      {text('Text', 'Button')}
    </Button>
  </div>
))
