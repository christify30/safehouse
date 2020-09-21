import { connect } from 'react-redux'
import { Login } from './Login'
import { login } from 'store'
import { UserData } from 'utils/session'
import { AppState } from 'store/reducers'

export interface UserProps {
  userData: UserData
  isAuthenticated: boolean
  error: string
  loading: boolean
}

const mapStateToProps = (state: AppState) => {
  return {
    user: state.auth,
  }
}

const mapDispatchToProps = {
  login,
}

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
