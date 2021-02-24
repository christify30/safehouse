import { ActionsObservable, ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import { mergeMap, catchError, map } from 'rxjs/operators'
import {
  FETCH_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  fetchUsersSuccess,
  fetchUsersAction,
  createUserAction,
  createUserSuccess,
  UpdateUserAction,
  updateUserSuccess,
  setUserError,
  deleteUserSuccess,
  DeleteUserAction,
} from './actions'
import { history } from 'utils'
import { api } from 'service/request'

export const fetchUsersEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType<fetchUsersAction>(FETCH_USERS),
    mergeMap(() =>
      from(api.get({ url: '/auth/users' })).pipe(
        map((response: any) => {
          return fetchUsersSuccess(response.users)
        }),
        catchError(error => of(setUserError(error.message)))
      )
    )
  )

export const createUsersEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType<createUserAction>(CREATE_USER),
    mergeMap(action =>
      from(api.post({ url: '/auth/user', data: action.payload })).pipe(
        map((response: any) => {
          history.push('/users')
          return createUserSuccess(response)
        }),
        catchError(error => of(setUserError(error.message)))
      )
    )
  )

export const updateUsersEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType<UpdateUserAction>(UPDATE_USER),
    mergeMap(action =>
      from(
        api.put({
          url: `/auth/user`,
          data: action.payload,
        })
      ).pipe(
        map((response: any) => {
          history.push('/users')
          return updateUserSuccess(response)
        }),
        catchError(error => of(setUserError(error.message)))
      )
    )
  )

export const deleteUsersEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType<DeleteUserAction>(DELETE_USER),
    mergeMap(action =>
      from(api.delete({ url: `/auth/user/${action.payload}` })).pipe(
        map((response: any) => {
          history.push('/users')
          return deleteUserSuccess(response)
        }),
        catchError(error => of(setUserError(error.message)))
      )
    )
  )
