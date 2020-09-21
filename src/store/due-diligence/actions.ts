export const FETCH_DUEDILIGENCE = 'FETCH_DUEDILIGENCE'
export const FETCH_DUEDILIGENCE_SUCCESS = 'FETCH_DUEDILIGENCE_SUCCESS'
export const LOADING_DUEDILIGENCE = 'LOADING_DUEDILIGENCE'
export const CREATE_DUEDILIGENCE = 'CREATE_DUEDILIGENCE'
export const CREATE_DUEDILIGENCE_SUCCESS = 'CREATE_DUEDILIGENCE_SUCCESS'
export const UPDATE_DUEDILIGENCE = 'UPDATE_DUEDILIGENCE'
export const UPDATE_DUEDILIGENCE_SUCCESS = 'UPDATE_DUEDILIGENCE_SUCCESS'
export const SET_DUEDILIGENCE_ERROR = 'SET_DUEDILIGENCE_ERROR'
export const DELETE_DUEDILIGENCE = 'DELETE_DUEDILIGENCE'
export const DELETE_DUEDILIGENCE_SUCCESS = 'DELETE_DUEDILIGENCE_SUCCESS'

export interface FetchDueDiligenceAction {
  type: typeof FETCH_DUEDILIGENCE
}

export interface SetDueDiligenceError {
  type: typeof SET_DUEDILIGENCE_ERROR
  payload: string
}

export interface CreateDueDiligenceAction {
  type: typeof CREATE_DUEDILIGENCE
  payload: CreateDueDiligenceData
}

export interface UpdateDueDiligenceAction {
  type: typeof UPDATE_DUEDILIGENCE
  payload: UpdateDueDiligenceData
}

export interface DeleteDueDiligenceAction {
  type: typeof DELETE_DUEDILIGENCE
  payload: Number
}

export interface CreateDueDiligenceData {
  name: string
}

export interface UpdateDueDiligenceData {
  id: Number
  data: CreateDueDiligenceData
}

export const fetchDueDiligences = (): FetchDueDiligenceAction => ({
  type: FETCH_DUEDILIGENCE,
})

export const fetchDueDiligenceSuccess = (payload: any): any => ({
  type: FETCH_DUEDILIGENCE_SUCCESS,
  payload,
})

export const setDueDiligenceError = (
  payload: string
): SetDueDiligenceError => ({
  type: SET_DUEDILIGENCE_ERROR,
  payload,
})

export const createDueDiligence = (payload: CreateDueDiligenceData) => ({
  type: CREATE_DUEDILIGENCE,
  payload,
})

export const createDueDiligenceSuccess = (payload: CreateDueDiligenceData) => ({
  type: CREATE_DUEDILIGENCE_SUCCESS,
  payload,
})

export const updateDueDiligence = (payload: UpdateDueDiligenceData) => ({
  type: UPDATE_DUEDILIGENCE,
  payload,
})

export const updateDueDiligenceSuccess = (payload: CreateDueDiligenceData) => ({
  type: UPDATE_DUEDILIGENCE_SUCCESS,
  payload,
})

export const deleteDueDiligence = (payload: Number) => ({
  type: DELETE_DUEDILIGENCE,
  payload,
})

export const deleteDueDiligenceSuccess = (payload: any) => ({
  type: DELETE_DUEDILIGENCE_SUCCESS,
  payload,
})
