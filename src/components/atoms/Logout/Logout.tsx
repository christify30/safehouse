import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeToken } from 'utils/session'
import { logout } from 'store'

const Logout = (props: any) => {
  useEffect(() => {
    props.logout()
    removeToken()
  }, [])

  return (
    <div>
      <Redirect to="/" />
    </div>
  )
}

const mapDispatchToProps = {
  logout,
}

export const LogoutContainer = connect(
  null,
  mapDispatchToProps
)(Logout)
