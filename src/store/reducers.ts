import { combineReducers } from 'redux'
import { authReducer, AuthState } from './authentication/reducer'
import { usersReducer, UserState } from './users/reducer'
import { dueDiligenceReducer, DueDiligenceState } from './due-diligence/reducer'
import {
  propertyListingsReducer,
  PropertyListingState,
} from './property-listing/reducer'

export interface AppState {
  auth: AuthState
  users: UserState
  dueDiligence: DueDiligenceState
  propertyListing: PropertyListingState
}

const reducers = {
  auth: authReducer,
  users: usersReducer,
  dueDiligence: dueDiligenceReducer,
  propertyListing: propertyListingsReducer,
}
export default combineReducers<AppState>(reducers)
