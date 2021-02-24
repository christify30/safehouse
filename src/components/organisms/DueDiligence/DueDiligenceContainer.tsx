import { connect } from 'react-redux'
import {
  fetchDueDiligences,
  createDueDiligence,
  updateDueDiligence,
  deleteDueDiligence,
  getDueDiligenceById,
  getDueDiligence,
} from 'store'
import { AppState } from 'store/reducers'

const mapStateToProps = (state: AppState, { match: { params } }: any) => {
  return {
    dueDiligenceList: getDueDiligence(state),
    loading: state.dueDiligence.loading,
    error: state.dueDiligence.error,
    dueDiligence: getDueDiligenceById(state, params.id),
  }
}

const mapDispatchToProps = {
  fetchDueDiligences,
  createDueDiligence,
  updateDueDiligence,
  deleteDueDiligence,
}

export const DueDiligenceContainer = (Component: React.FC) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
}
