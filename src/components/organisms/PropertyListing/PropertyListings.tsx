/** @jsx jsx */
import React, { useEffect, Fragment } from 'react'
import { jsx, css } from '@emotion/core'
import { PropertyListingContainer } from './PropertyListingContainer'
import { ThemeProps, theme } from 'theme'
import { Table, Loader, Header, Text, Notification } from 'components'
import { Link } from 'react-router-dom'

const PropertyListings = (props: any) => {
  const { fetchPropertyListings, propertyListings, loading, error } = props

  useEffect(() => {
    fetchPropertyListings()
  }, [])

  const classes = styles({ theme })

  return (
    <section css={classes.container}>
      <Header
        title="Property Listings"
        buttonType="primary"
        buttonUrl="/property-listings/new"
        buttonText="Add Property"
      />
      <section css={classes.itemsContainer}>
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            {!error && propertyListings.length > 0 && (
              <Table
                tableData={propertyListings}
                tableHeader={tableHeader}
                route="property-listings"
              />
            )}
            {propertyListings && propertyListings.length === 0 && (
              <React.Fragment>
                <Text text="There is no data to show currently" />{' '}
                <Link to="/property-listings/new">Add New Property</Link>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
        {error && (
          <Notification
            notificationType="error"
            text={error}
            css={classes.error}
          />
        )}
      </section>
    </section>
  )
}

export default PropertyListingContainer(PropertyListings)

const tableHeader = [
  { title: 'Name', key: 'name' },
  { title: 'Location', key: 'location' },
  { title: 'Price', key: 'price' },
  { title: 'Category', key: 'category' },
]

const styles = (props: ThemeProps) => ({
  container: css`
    width: 100%;
  `,
  itemsContainer: css`
    padding: 0 25px;
  `,
  error: css`
    width: 400px;
    position: absolute;
    bottom: 20px;
    right: 20px;
  `,
})
