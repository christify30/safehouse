import {
  SET_CURRENT_USER,
  SET_AUTH_ERROR,
  LOGIN_USER,
  LOGOUT_USER_SUCCESS,
} from './actions'

export interface AuthState {
  userData: object
  isAuthenticated: boolean
  error: string
  loading: boolean
}

export const initialState: AuthState = {
  userData: {},
  isAuthenticated: false,
  error: '',
  loading: false,
}

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
        error: '',
        loading: false,
      }

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        userData: {},
        error: '',
        loading: false,
      }
    case SET_AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
