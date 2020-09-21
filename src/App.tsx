/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { jsx, css, Global } from '@emotion/core'
import { withTheme } from 'emotion-theming'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from 'utils'

import {
  LoginPage,
  SideBar,
  Users,
  NewUser,
  EditUser,
  DueDiligence,
  NewDueDiligence,
  EditDueDiligence,
  PropertyListings,
  NewPropertyListing,
  EditPropertyListing,
  LogoutContainer,
  DeleteUser,
  DeletePropertyListing,
  DeleteDueDiligence,
} from 'components'

const AppComponent: React.FC = (props: any) => {
  const [isMobile, setMobileView] = useState(false)
  const [sideBar, showSideBar] = useState(true)

  useEffect(() => {
    const isMobileView = () => {
      const match = window.matchMedia('(max-width: 768px)').matches
      match ? setMobileView(true) : setMobileView(false)
    }
    isMobileView()
    window.addEventListener('resize', isMobileView)
  }, [])

  const toggleSidebar = () => {
    showSideBar(!sideBar)
  }

  const closeSidebar = () => {
    isMobile && showSideBar(false)
  }

  const {
    auth: { isAuthenticated },
  } = props

  return (
    <React.Fragment>
      <div css={classes().container}>
        {isAuthenticated && (
          <SideBar
            isMobile={isMobile}
            showSidebar={sideBar}
            onToggle={toggleSidebar}
            closeSidebar={closeSidebar}
            {...props}
          />
        )}
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/logout" component={LogoutContainer} />
          <PrivateRoute
            exact
            path="/users"
            component={Users}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            path="/users/edit/:id"
            component={EditUser}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            path="/users/delete/:id"
            component={DeleteUser}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            path="/users/new"
            isAuthenticated={isAuthenticated}
            component={NewUser}
          />
          <PrivateRoute
            exact
            path="/due-diligence"
            isAuthenticated={isAuthenticated}
            component={DueDiligence}
          />
          <PrivateRoute
            path="/due-diligence/new"
            isAuthenticated={isAuthenticated}
            component={NewDueDiligence}
          />
          <PrivateRoute
            path="/due-diligence/edit/:id"
            isAuthenticated={isAuthenticated}
            component={EditDueDiligence}
          />
          <PrivateRoute
            path="/due-diligence/delete/:id"
            isAuthenticated={isAuthenticated}
            component={DeleteDueDiligence}
          />
          <PrivateRoute
            exact
            path="/property-listings"
            isAuthenticated={isAuthenticated}
            component={PropertyListings}
          />
          <PrivateRoute
            path="/property-listings/new"
            isAuthenticated={isAuthenticated}
            component={NewPropertyListing}
          />
          <PrivateRoute
            path="/property-listings/edit/:id"
            isAuthenticated={isAuthenticated}
            component={EditPropertyListing}
          />
          <PrivateRoute
            path="/property-listings/delete/:id"
            isAuthenticated={isAuthenticated}
            component={DeletePropertyListing}
          />
        </Switch>
      </div>
      <Global styles={classes().global} />
    </React.Fragment>
  )
}

const classes = () => ({
  global: css`
    @font-face {
      font-family: 'SourceSansPro';
      src: url(${require('./resources/fonts/TitilliumWeb-Regular.ttf')});
    }

    @font-face {
      font-family: 'Titillium Web';
      src: url(${require('./resources/fonts/TitilliumWeb-Regular.ttf')});
      font-weight: 400;
    }

    @font-face {
      font-family: 'Titillium Web';
      src: url(${require('./resources/fonts/TitilliumWeb-Bold.ttf')});
      font-weight: 700;
    }

    @font-face {
      font-family: 'Titillium Web';
      src: url(${require('./resources/fonts/TitilliumWeb-Light.ttf')});
      font-weight: 300;
    }

    html {
      width: 100%;
      height: 100%;
    }
    body {
      margin: 0px;
      font-family: 'Titillium Web';
      width: 100%;
      height: 100%;
    }
    a {
      text-decoration: none;
      color: unset;
      &:hover {
        text-decoration: none;
        color: unset;
      }
    }
    #root {
      height: 100%;
    }
  `,
  container: css`
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 768px) {
      display: block;
    }
  `,
})

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  }
}

export const App = connect(mapStateToProps)(withTheme(AppComponent))
