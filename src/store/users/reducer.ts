import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS,
  SET_USER_ERROR,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  FETCH_USER_BY_ID,
  FETCH_USER_BY_ID_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
} from './actions'

export interface User {
  id: number
  name: string
  surname: string
  photo: string
  comment: string
  departmentsId: number
  positionsId: number
}

interface UserIndex {
  [id: number]: User
}

export interface UserState {
  data: number[]
  byId: UserIndex
  loading: boolean
  error: string
  userFromId?: User
}

export const initialState: UserState = {
  data: [],
  byId: {},
  loading: false,
  error: '',
}

export const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload.map((user: User) => user.id),
        byId: action.payload.reduce((acc: UserIndex, curr: User) => {
          acc[curr.id] = curr
          return acc
        }, {}),
        loading: false,
      }
    case FETCH_USER_BY_ID:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USER_BY_ID_SUCCESS:
      return {
        ...state,
        userFromId: action.payload,
      }
    case CREATE_USER:
      return {
        ...state,
        loading: true,
      }
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case UPDATE_USER:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case DELETE_USER:
      return {
        ...state,
        loading: true,
      }
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case SET_USER_ERROR:
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
