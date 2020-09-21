import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Select } from './Select'

const toggleSelected = (id: number, name: string) => {
  console.log('ID: ', id, 'Name: ', name)
}

// storiesOf('Select', module)
// .add('default', () => (
//   <div style={{ width: '400px' }}>
//     <Select list={list} title="department" error="" />
//   </div>
// ))
// .add('Custom select', () => <CustomSelect />)

const list: any = [
  {
    id: 1,
    name: 'Solutions',
  },
  {
    id: 2,
    name: 'Research',
  },
]
