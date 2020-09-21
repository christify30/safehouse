import { AppState } from 'store/reducers'

export const getDueDiligence = (state: AppState) =>
  state.dueDiligence.data.map(id => getDueDiligenceById(state, id))
export const getDueDiligenceById = (state: AppState, id: number) =>
  state.dueDiligence.byId[id]
