import { AppState } from 'store/reducers'

export const getUsers = (state: AppState) =>
  state.users.data.map(id => getUserById(state, id))
export const getUserById = (state: AppState, _id: number) =>
  state.users.byId[_id]
