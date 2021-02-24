import { connect } from 'react-redux'
import {
  fetchUsers,
  getUsers,
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
    user: getUserById(state, params.id),
    users: getUsers(state),
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
