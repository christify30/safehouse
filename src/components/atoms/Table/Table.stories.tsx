import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Table } from '.'

// storiesOf('Table', module).add('Table', () => (
//   // <Table tableData={tableData} tableHeader={tableHeader} />
// ))

const tableData = [
  {
    photo: 'small',
    name: 'Benedicta',
    surname: 'Sandeep',
    position: 'Developer',
    department: 'Solutions',
    comments: 'Some comment here about benedict',
  },
  {
    photo: 'small',
    name: 'Kunle',
    surname: 'Michael',
    position: 'Developer',
    department: 'Solutions',
    comments: 'Some few comments here about Michael',
  },
  {
    photo: 'small',
    name: 'Kunle',
    surname: 'Michael',
    position: 'Developer',
    department: 'Solutions',
    comments: 'Some few comments here about Michael',
  },
]

const tableHeader = [
  { title: 'Photo', key: 'photo' },
  { title: 'Name', key: 'name' },
  { title: 'Surname', key: 'surname' },
  { title: 'Position', key: 'position' },
  { title: 'Department', key: 'department' },
  { title: 'Comments', key: 'comments' },
]