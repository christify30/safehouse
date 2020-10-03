import { ActionsObservable, ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import { mergeMap, catchError, map } from 'rxjs/operators'
import {
  FETCH_DUEDILIGENCE,
  fetchDueDiligenceSuccess,
  FetchDueDiligenceAction,
  setDueDiligenceError,
  CREATE_DUEDILIGENCE,
  createDueDiligenceSuccess,
  CreateDueDiligenceAction,
  CreateDueDiligenceData,
  UpdateDueDiligenceAction,
  updateDueDiligenceSuccess,
  UPDATE_DUEDILIGENCE,
  DeleteDueDiligenceAction,
  DELETE_DUEDILIGENCE,
  deleteDueDiligenceSuccess,
} from './actions'
import { api } from 'service/request'
import { history } from 'utils'

export const fetchDueDiligenceEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType<FetchDueDiligenceAction>(FETCH_DUEDILIGENCE),
    mergeMap(() =>
      from(api.get({ url: '/due-diligence' })).pipe(
        map((response: any) => {
          return fetchDueDiligenceSuccess(response.requests)
        }),
        catchError(error => of(setDueDiligenceError(error.message)))
      )
    )
  )

export const createDueDiligenceEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType<CreateDueDiligenceAction>(CREATE_DUEDILIGENCE),
    mergeMap(action =>
      from(api.post({ url: '/due-diligence', data: action.payload })).pipe(
        map((response: CreateDueDiligenceData) => {
          history.push('/due-diligence')
          return createDueDiligenceSuccess(response)
        }),
        catchError(error => of(setDueDiligenceError(error.message)))
      )
    )
  )

export const updateDueDiligenceEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType<UpdateDueDiligenceAction>(UPDATE_DUEDILIGENCE),
    mergeMap(action =>
      from(
        api.put({
          url: `/due-diligence/update`,
          data: action.payload,
        })
      ).pipe(
        map((response: CreateDueDiligenceData) => {
          history.push('/due-diligence')
          return updateDueDiligenceSuccess(response)
        }),
        catchError(error => of(setDueDiligenceError(error.message)))
      )
    )
  )

export const deleteDueDiligenceEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType<DeleteDueDiligenceAction>(DELETE_DUEDILIGENCE),
    mergeMap(action =>
      from(api.delete({ url: `/die-diligence/${action.payload}` })).pipe(
        map((response: any) => {
          history.push('/due-diligence')
          return deleteDueDiligenceSuccess(response)
        }),
        catchError(error => of(setDueDiligenceError(error.message)))
      )
    )
  )
