import { ActionsObservable, ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import { mergeMap, catchError, map } from 'rxjs/operators'
import {
  FETCH_PROPERTY_LISTINGS,
  fetchPropertyListingsSuccess,
  FetchPropertyListingsAction,
  setPropertyListingError,
  createPropertyListingSuccess,
  CreatePropertyListingAction,
  CREATE_PROPERTY_LISTING,
  updatePropertyListingSuccess,
  UpdatePropertyListingAction,
  UPDATE_PROPERTY_LISTING,
  CreatePropertyListingData,
  DELETE_PROPERTY_LISTING,
  deletePropertyListingSuccess,
  DeletePropertyListingAction,
} from './actions'
import { api } from 'service/request'
import { history } from 'utils'

export const fetchPropertyListingsEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType<FetchPropertyListingsAction>(FETCH_PROPERTY_LISTINGS),
    mergeMap(() =>
      from(api.get({ url: '/property-listings' })).pipe(
        map((response: any) => {
          return fetchPropertyListingsSuccess(response.properties)
        }),
        catchError(error => of(setPropertyListingError(error.message)))
      )
    )
  )

export const createPropertyListingEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType<CreatePropertyListingAction>(CREATE_PROPERTY_LISTING),
    mergeMap ( action =>{
      console.log(action.payload);
      
      return from(api.post({ url: '/property-listings', data: action.payload })).pipe(
        map((response: any) => {
          history.push('/property-listings')
          return createPropertyListingSuccess(response)
        } ),
        catchError(error => of(setPropertyListingError(error.message)))
      )
    })
  )

export const updatePropertyListingEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType<UpdatePropertyListingAction>(UPDATE_PROPERTY_LISTING),
    mergeMap(action =>
      from(
        api.put({
          url: `/property-listings/${action.payload.id}`,
          data: action.payload.data,
        })
      ).pipe(
        map((response: CreatePropertyListingData) => {
          history.push('/property-listings')
          return updatePropertyListingSuccess(response)
        }),
        catchError(error => of(setPropertyListingError(error.message)))
      )
    )
  )

export const deletePropertyListingEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    ofType<DeletePropertyListingAction>(DELETE_PROPERTY_LISTING),
    mergeMap(action =>
      from(api.delete({ url: `/property-listings/${action.payload}` })).pipe(
        map((response: any) => {
          history.push('/property-listings')
          return deletePropertyListingSuccess(response)
        }),
        catchError(error => of(setPropertyListingError(error.message)))
      )
    )
  )
