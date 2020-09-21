import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, optionsKnob as options } from '@storybook/addon-knobs'

import { Notification } from './Notification'

const valuesObj = {
  Success: 'success',
  Error: 'error',
  Info: 'info',
}

const optionsObj: any = {
  display: 'radio',
}

storiesOf('Notification', module).add('Default', () => (
  <div style={{ width: '350px' }}>
    <Notification
      text={text('notification', 'Success notification example')}
      notificationType={options(
        'type',
        valuesObj,
        valuesObj.Success,
        optionsObj
      )}
    />
  </div>
))
