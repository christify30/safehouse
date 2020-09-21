import { AppState } from 'store/reducers'

export const getUsers = (state: AppState) =>
  state.users.data.map(id => getUserById(state, id))
export const getUserById = (state: AppState, id: number) => state.users.byId[id]
