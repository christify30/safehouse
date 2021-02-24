import {
  FETCH_DUEDILIGENCE,
  FETCH_DUEDILIGENCE_SUCCESS,
  SET_DUEDILIGENCE_ERROR,
  CREATE_DUEDILIGENCE,
  CREATE_DUEDILIGENCE_SUCCESS,
  UPDATE_DUEDILIGENCE,
  UPDATE_DUEDILIGENCE_SUCCESS,
  DELETE_DUEDILIGENCE,
  DELETE_DUEDILIGENCE_SUCCESS,
} from './actions'

export interface DueDiligence {
  _id: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  propertyOwnerName: string
  propertyAddress: string
  titleDeed: string
  titleSurveyNumber: string
  transactionStatus: 'INITIATED' | 'IN_PROGRESS' | 'COMPLETED'
}

interface DueDiligenceIndex {
  [id: string]: DueDiligence
}

export interface DueDiligenceState {
  data: number[]
  byId: DueDiligenceIndex
  loading: boolean
  error: string
}

export const initialState: DueDiligenceState = {
  data: [],
  byId: {},
  loading: false,
  error: '',
}

export const dueDiligenceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DUEDILIGENCE:
      return {
        ...state,
        loading: true,
      }
    case FETCH_DUEDILIGENCE_SUCCESS:
      return {
        ...state,
        data: action.payload.map((item: DueDiligence) => item._id),
        byId: action.payload.reduce(
          (acc: DueDiligenceIndex, curr: DueDiligence) => {
            acc[curr._id] = curr
            return acc
          },
          {}
        ),
        loading: false,
      }
    case CREATE_DUEDILIGENCE:
      return {
        ...state,
        loading: true,
      }
    case CREATE_DUEDILIGENCE_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case UPDATE_DUEDILIGENCE:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_DUEDILIGENCE_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case DELETE_DUEDILIGENCE:
      return {
        ...state,
        loading: true,
      }
    case DELETE_DUEDILIGENCE_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case SET_DUEDILIGENCE_ERROR:
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
