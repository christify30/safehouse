import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ImageUpload } from './ImageUpload'

storiesOf('Image Upload', module).add('default', () => (
  <div style={{ width: '400px' }}>
    <ImageUpload />
  </div>
))
