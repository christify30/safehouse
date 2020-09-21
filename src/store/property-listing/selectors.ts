import { AppState } from 'store/reducers'

export const getPropertyListings = (state: AppState) =>
  state.propertyListing.data.map(id => getPropertyListingsById(state, id))
export const getPropertyListingsById = (state: AppState, id: number) =>
  state.propertyListing.byId[id]
