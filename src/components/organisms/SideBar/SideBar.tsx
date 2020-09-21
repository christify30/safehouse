/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { NavigationLink, Icon, Text } from 'components'
import { theme, ThemeProps } from 'theme'
import { sideBarList, SideBarList } from './sideBarList'

interface SideBarProps extends RouteComponentProps {
  isMobile: boolean
  closeSidebar?: any
  onToggle?: any
  showSidebar?: boolean
}

export const SideBar = withRouter((props: SideBarProps) => {
  const { isMobile, onToggle, showSidebar, closeSidebar } = props

  const classes = styles({ ...props, theme })
  return (
    <React.Fragment>
      {showSidebar && (
        <section css={classes.container}>
          <div css={classes.title}>
            <Icon
              icon="onboarding"
              width={24}
              css={classes.onboardingIcon}
              color={{ type: 'light', shade: 500 }}
            />

            <Text text="Safehouse Admin" size={'extraLarge'} />
            {isMobile && (
              <Icon
                icon="close"
                width={24}
                color={{ type: 'light', shade: 500 }}
                css={classes.closeIcon}
                onClick={onToggle}
              />
            )}
          </div>
          {sideBarList.map((item: SideBarList) => {
            return (
              <Link
                key={item.url}
                to={item.url}
                css={css`
                  ${classes.navLinkItems};
                `}
                onClick={closeSidebar}>
                <NavigationLink
                  icon={item.icon}
                  text={item.text}
                  active={item.url === props.location.pathname}
                />
              </Link>
            )
          })}
        </section>
      )}

      {!showSidebar && (
        <Icon
          icon="burger"
          width={32}
          css={classes.burgerIcon}
          onClick={onToggle}
        />
      )}
    </React.Fragment>
  )
})

const styles = (props: SideBarProps & ThemeProps) => ({
  container: css`
    background-color: ${theme.getColor('grey', 100)(props)};
    position: relative;
    width: ${props.isMobile ? '90%' : '350px'};
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
  title: css`
    display: flex;
    flex-direction: row;
    padding: 5px 10px;
    color: ${theme.getColor('light', 500)(props)};
    margin: 20px 0;
  `,
  onboardingIcon: css`
    margin-right: 20px;
    vertical-align: bottom;
  `,
  navLinkItems: css`
    &:last-child {
      margin-top: auto;
    }
  `,
  closeIcon: css`
    margin-left: auto;
    cursor: pointer;
  `,
  burgerIcon: css`
    cursor: pointer;
    position: absolute;
    top: 25px;
    left: 25px;
  `,
})
