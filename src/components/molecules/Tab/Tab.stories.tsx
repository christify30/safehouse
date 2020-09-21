import React from 'react'
import { storiesOf } from '@storybook/react'

import { Tab } from './Tab'
import { TabPane } from './TabPane'

storiesOf('Tab', module).add('Tab', () => {
  return (
    <Tab activeTab="1">
      {tabs.map(tab => {
        return (
          <TabPane tabIndex={tab.index} tabName={tab.name}>
            {tab.name}
          </TabPane>
        )
      })}
      {/* <TabPane tab="1">TAB 1 loooolllooo</TabPane>
      <TabPane tab="2">TAB 2</TabPane>
      <TabPane tab="3">TAB 3</TabPane> */}
    </Tab>
  )
})

const tabs = [
  { index: 1, name: 'General Information' },
  { index: 2, name: 'Comments' },
  { index: 3, name: 'Extra' },
]
