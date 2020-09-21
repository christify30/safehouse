import {
  FETCH_PROPERTY_LISTINGS,
  FETCH_PROPERTY_LISTINGS_SUCCESS,
  SET_PROPERTY_LISTING_ERROR,
  CREATE_PROPERTY_LISTING,
  CREATE_PROPERTY_LISTING_SUCCESS,
  DELETE_PROPERTY_LISTING,
  DELETE_PROPERTY_LISTING_SUCCESS,
} from './actions'

export interface PropertyListing {
  _id: string
  name: string
  location: string
  price: number
  category: 'HOUSE' | 'LAND'
  description: string
  public: boolean
  basicFeatures: string[]
  additionalFeatures: string[]
  images: string[]
  rating: number
}

interface PropertyListingIndex {
  [id: string]: PropertyListing
}

export interface PropertyListingState {
  data: number[]
  byId: PropertyListingIndex
  loading: boolean
  error: string
}

export const initialState: PropertyListingState = {
  data: [],
  byId: {},
  loading: false,
  error: '',
}

export const propertyListingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PROPERTY_LISTINGS:
      return {
        ...state,
        loading: true,
      }
    case FETCH_PROPERTY_LISTINGS_SUCCESS:
      return {
        ...state,
        data: action.payload.map((property: PropertyListing) => property._id),
        byId: action.payload.reduce(
          (acc: PropertyListingIndex, curr: PropertyListing) => {
            acc[curr._id] = curr
            return acc
          },
          {}
        ),
        loading: false,
      }
    case CREATE_PROPERTY_LISTING:
      return {
        ...state,
        loading: true,
      }
    case CREATE_PROPERTY_LISTING_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case DELETE_PROPERTY_LISTING:
      return {
        ...state,
        loading: true,
      }
    case DELETE_PROPERTY_LISTING_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case SET_PROPERTY_LISTING_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
