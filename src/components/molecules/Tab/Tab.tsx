/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, css } from '@emotion/core'
import { ThemeProps, theme } from 'theme'

interface Tab {
  id: number
  name: string
}

interface TabProps {
  activeTab: string
  tabIndex: any
}

export const Tab = (props: any) => {
  const [activeTabIndex, setActiveTab] = useState(1)
  const { children } = props
  const classes = styles({ ...props, theme })

  return (
    <section css={classes.container}>
      <div css={classes.tabWrapper}>
        {children.map((el: any) => (
          <button
            key={el.props.tabIndex}
            css={css`
              ${classes.button};
              ${activeTabIndex === el.props.tabIndex
                ? classes.activeButton
                : ''};
            `}
            onClick={() => setActiveTab(parseInt(el.props.tabIndex, 10))}>
            {el.props.tabName}
          </button>
        ))}
      </div>
      <div>{children[activeTabIndex - 1]}</div>
    </section>
  )
}

const styles = (props: ThemeProps & TabProps) => ({
  container: css`
    border: 1px solid ${theme.getColor('grey', 200)(props)};
  `,
  tabWrapper: css`
    border-bottom: 1px solid ${theme.getColor('grey', 200)(props)};
  `,
  button: css`
    padding: 5px 25px;
    background-color: ${theme.getColor('light', 500)(props)};
    color: ${theme.getColor('light', 200)(props)};
    font-size: ${theme.getFontSize('regular')(props)};
    letter-spacing: 1px;
    font-family: ${theme.getFont('primary')(props)};
    cursor: pointer;
    height: 50px;
    border: none;
    outline: none;
    border-right: 1px solid ${theme.getColor('grey', 200)(props)};
  `,
  activeButton: css`
    border-top: 1px solid ${theme.getColor('primary', 400)(props)};
    color: ${theme.getColor('dark', 500)(props)};
  `,
})
