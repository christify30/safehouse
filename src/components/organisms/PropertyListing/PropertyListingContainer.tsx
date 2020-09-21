import { connect } from 'react-redux'
import {
  getPropertyListings,
  getPropertyListingsById,
  fetchPropertyListings,
  createPropertyListing,
  updatePropertyListing,
  deletePropertyListing,
} from 'store'
import { AppState } from 'store/reducers'

const mapStateToProps = (state: AppState, { match: { params } }: any) => {
  return {
    propertyListings: getPropertyListings(state),
    loading: state.propertyListing.loading,
    error: state.propertyListing.error,
    propertyListing: getPropertyListingsById(state, Number(params.id)),
  }
}

const mapDispatchToProps = {
  fetchPropertyListings,
  createPropertyListing,
  updatePropertyListing,
  deletePropertyListing,
}

export const PropertyListingContainer = (Component: React.FC) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
}
