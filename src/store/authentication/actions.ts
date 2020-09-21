import { UserData } from '../../utils/session'
import { LoginResponse } from './epics'

export const LOADING = 'LOADING'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const SET_AUTH_ERROR = 'SET_AUTH_ERROR'

export interface SetCurrentUser {
  type: typeof SET_CURRENT_USER
  payload: UserData
}

export type AuthAction = SetCurrentUser | SetAuthError | LoginAction

export interface SetAuthError {
  type: typeof SET_AUTH_ERROR
  payload: string
}

export interface LoginAction {
  type: typeof LOGIN_USER
  payload: UserData
}

export interface LogoutAction {
  type: typeof LOGOUT_USER
}

export const setCurrentUser = (payload: UserData): SetCurrentUser => ({
  type: SET_CURRENT_USER,
  payload,
})

export const login = (payload: UserData): LoginAction => ({
  type: LOGIN_USER,
  payload,
})

export const loginSuccess = (payload: LoginResponse) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  }
}

export const logout = () => {
  return {
    type: LOGOUT_USER,
  }
}

export const logoutSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
  }
}

export const setAuthError = (payload: string): SetAuthError => {
  return {
    type: SET_AUTH_ERROR,
    payload,
  }
}

export const loading = () => {
  return {
    type: LOADING,
  }
}
