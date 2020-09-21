/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'

import { SideBar } from './SideBar'

storiesOf('Side Bar', module).add('Default', () => <SideBar isMobile={false} />)
