export const FETCH_PROPERTY_LISTINGS = 'FETCH_PROPERTY_LISTINGS'
export const FETCH_PROPERTY_LISTINGS_SUCCESS = 'FETCH_PROPERTY_LISTINGS_SUCCESS'
export const LOADING_PROPERTY_LISTINGS = 'LOADING_PROPERTY_LISTINGS'
export const SET_PROPERTY_LISTING_ERROR = 'SET_PROPERTY_LISTING_ERROR'
export const CREATE_PROPERTY_LISTING = 'CREATE_PROPERTY_LISTING'
export const CREATE_PROPERTY_LISTING_SUCCESS = 'CREATE_PROPERTY_LISTING_SUCCESS'
export const UPDATE_PROPERTY_LISTING = 'UPDATE_PROPERTY_LISTING'
export const UPDATE_PROPERTY_LISTING_SUCCESS = 'UPDATE_PROPERTY_LISTING_SUCCESS'
export const DELETE_PROPERTY_LISTING = 'DELETE_PROPERTY_LISTING'
export const DELETE_PROPERTY_LISTING_SUCCESS = 'DELETE_PROPERTY_LISTING_SUCCESS'

export interface FetchPropertyListingsAction {
  type: typeof FETCH_PROPERTY_LISTINGS
}

export interface SetPropertyListingError {
  type: typeof SET_PROPERTY_LISTING_ERROR
  payload: string
}

export interface CreatePropertyListingAction {
  type: typeof CREATE_PROPERTY_LISTING
  payload: CreatePropertyListingData
}

export interface CreatePropertyListingData {
  name: string
}

export interface UpdatePropertyListingAction {
  type: typeof UPDATE_PROPERTY_LISTING
  payload: UpdatePropertyListingData
}

export interface DeletePropertyListingAction {
  type: typeof DELETE_PROPERTY_LISTING
  payload: Number
}

export interface UpdatePropertyListingData {
  id: Number
  data: CreatePropertyListingData
}

export const fetchPropertyListings = (): FetchPropertyListingsAction => ({
  type: FETCH_PROPERTY_LISTINGS,
})

export const fetchPropertyListingsSuccess = (payload: any): any => ({
  type: FETCH_PROPERTY_LISTINGS_SUCCESS,
  payload,
})

export const setPropertyListingError = (
  payload: string
): SetPropertyListingError => {
  return {
    type: SET_PROPERTY_LISTING_ERROR,
    payload,
  }
}

export const createPropertyListing = (payload: CreatePropertyListingData) => ({
  type: CREATE_PROPERTY_LISTING,
  payload,
})

export const createPropertyListingSuccess = (
  payload: CreatePropertyListingData
) => ({
  type: CREATE_PROPERTY_LISTING_SUCCESS,
  payload,
})

export const updatePropertyListing = (payload: UpdatePropertyListingData) => ({
  type: UPDATE_PROPERTY_LISTING,
  payload,
})

export const updatePropertyListingSuccess = (
  payload: CreatePropertyListingData
) => ({
  type: UPDATE_PROPERTY_LISTING_SUCCESS,
  payload,
})

export const deletePropertyListing = (payload: Number) => ({
  type: DELETE_PROPERTY_LISTING,
  payload,
})

export const deletePropertyListingSuccess = (payload: any) => ({
  type: DELETE_PROPERTY_LISTING_SUCCESS,
  payload,
})
