import { ActionsObservable, ofType } from 'redux-observable'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { from, of, Observable } from 'rxjs'
import { saveSession } from '../../utils/session'
import { api } from 'service/request'
import {
  LOGIN_USER,
  setCurrentUser,
  setAuthError,
  LoginAction,
  loginSuccess,
  logoutSuccess,
  LOGOUT_USER,
  LogoutAction,
} from './actions'
import { AnyAction } from 'redux'

export interface LoginResponse {
  accessToken: string
}

export const loginEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType<LoginAction>(LOGIN_USER),
    mergeMap(action =>
      from(
        api.post({ url: '/auth/admin/login', data: action.payload }, false)
      ).pipe(
        mergeMap((response: LoginResponse) => {
          const currentUser = saveSession(response.accessToken)
          return [setCurrentUser(currentUser), loginSuccess(response)]
        }),
        catchError(error => of(setAuthError(error.message)))
      )
    )
  )

export const logoutEpic = (action$: Observable<AnyAction>): Observable<any> =>
  action$.pipe(
    ofType<LogoutAction>(LOGOUT_USER),
    map(() => {
      return logoutSuccess()
    }),
    catchError(() => of(setAuthError('Error')))
  )
