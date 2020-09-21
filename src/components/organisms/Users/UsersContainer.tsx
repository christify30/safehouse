import { connect } from 'react-redux'
import {
  fetchUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from 'store'
import { AppState } from 'store/reducers'

const mapStateToProps = (state: AppState, { match: { params } }: any) => {
  return {
    loading: state.users.loading,
    error: state.users.error,
    user: getUserById(state, Number(params.id)),
  }
}

const mapDispatchToProps = {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
}

export const UsersContainer = (Component: React.FC) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
}
