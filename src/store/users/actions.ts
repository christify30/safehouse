export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const LOADING_USERS = 'LOADING_USERS'
export const SET_USER_ERROR = 'SET_USER_ERROR'
export const CREATE_USER = 'CREATE_USER'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const FETCH_USER_BY_ID = 'FETCH_USER_BY_ID'
export const FETCH_USER_BY_ID_SUCCESS = 'FETCH_USER_BY_ID_SUCCESS'
export const DELETE_USER = 'DELETE_USER'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'

export interface fetchUsersAction {
  type: typeof FETCH_USERS
}

export interface createUserAction {
  type: typeof CREATE_USER
  payload: CreateUserData
}

export interface UpdateUserAction {
  type: typeof UPDATE_USER
  payload: UpdateUserData
}

export interface DeleteUserAction {
  type: typeof DELETE_USER
  payload: Number
}

export interface CreateUserData {
  name: string
  surname: string
  departmentId: number
  positionId: number
  photo?: string
  comment?: string
}

export interface UpdateUserData {
  id: Number
  data: CreateUserData
}

export interface SetUserError {
  type: typeof SET_USER_ERROR
  payload: string
}

export const fetchUsers = (): any => ({
  type: FETCH_USERS,
})

export const fetchUsersSuccess = (payload: any): any => ({
  type: FETCH_USERS_SUCCESS,
  payload,
})

export const fetchUserById = (payload: Number) => ({
  type: FETCH_USER_BY_ID,
  payload,
})

export const fetchUserByIdSuccess = (payload: Number) => ({
  type: FETCH_USER_BY_ID_SUCCESS,
  payload,
})

export const setUserError = (payload: string): SetUserError => {
  return {
    type: SET_USER_ERROR,
    payload,
  }
}

export const createUser = (payload: CreateUserData) => ({
  type: CREATE_USER,
  payload,
})

export const createUserSuccess = (payload: string) => ({
  type: CREATE_USER_SUCCESS,
  payload,
})

export const updateUser = (payload: UpdateUserData) => ({
  type: UPDATE_USER,
  payload,
})

export const updateUserSuccess = (payload: string) => ({
  type: UPDATE_USER_SUCCESS,
  payload,
})

export const deleteUser = (payload: Number) => ({
  type: DELETE_USER,
  payload,
})

export const deleteUserSuccess = (payload: any) => ({
  type: DELETE_USER_SUCCESS,
  payload,
})
