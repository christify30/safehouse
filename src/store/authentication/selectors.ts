import { initialState } from './reducer'

export const getUserEmail = (state: any = initialState) => state.user.user.email
export const getTokenExpiry = (state: any = initialState) => state.user.exp
