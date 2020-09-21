import { combineEpics } from 'redux-observable'
import {
  loginEpic,
  fetchUsersEpic,
  fetchDueDiligenceEpic,
  fetchPropertyListingsEpic,
  createUsersEpic,
  updateUsersEpic,
  createDueDiligenceEpic,
  updateDueDiligenceEpic,
  createPropertyListingEpic,
  logoutEpic,
  updatePropertyListingEpic,
  deleteUsersEpic,
  deleteDueDiligenceEpic,
  deletePropertyListingEpic,
} from 'store'

export const rootEpic = combineEpics(
  loginEpic,
  logoutEpic,
  fetchUsersEpic,
  createUsersEpic,
  updateUsersEpic,
  deleteUsersEpic,
  fetchDueDiligenceEpic,
  createDueDiligenceEpic,
  updateDueDiligenceEpic,
  deleteDueDiligenceEpic,
  fetchPropertyListingsEpic,
  createPropertyListingEpic,
  updatePropertyListingEpic,
  deletePropertyListingEpic
)
