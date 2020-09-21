/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx, css } from '@emotion/core'
import { PropertyListingContainer } from './PropertyListingContainer'
import { history } from 'utils'
import { Header, Button, Text, Loader } from 'components'
import { theme, ThemeProps } from 'theme'

const DeletePropertyListing = (props: any) => {
  const {
    deletePropertyListing,
    propertyListing,
    fetchPropertyListing,
    loading,
  } = props
  const classes = styles({ theme })

  useEffect(() => {
    if (!propertyListing) {
      fetchPropertyListing()
    }
  }, [])

  const onSubmit = () => {
    deletePropertyListing(propertyListing.id)
  }

  return (
    <section css={classes.container}>
      {loading && <Loader />}
      {propertyListing && (
        <section css={classes.deleteContainer}>
          <Header title={propertyListing.name} />
          <Text
            text={`Are you sure you want to delete ${propertyListing.name}?`}
            css={classes.tabContainer}
          />
          <div css={classes.buttonWrapper}>
            <Button
              icon="delete"
              css={css`
                ${classes.button};
                margin-right: 10px;
              `}
              onClick={onSubmit}>
              Delete Property
            </Button>
            <Button
              styleType="secondary"
              css={classes.button}
              onClick={() => history.push('/property-listings')}>
              Cancel
            </Button>
          </div>
        </section>
      )}
    </section>
  )
}

export default PropertyListingContainer(DeletePropertyListing)

const styles = (props: ThemeProps) => ({
  container: css`
    padding: 10px 30px;
    width: 100%;
  `,
  deleteContainer: css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  `,
  tabContainer: css`
    padding: 20px 25px;
    margin-bottom: 20px;
    border: 1px solid ${theme.getColor('grey', 200)(props)};
    border-top: 2px solid ${theme.getColor('primary', 400)(props)};
  `,
  error: css`
    width: 400px;
    position: absolute;
    bottom: 20px;
    right: 20px;
  `,
  button: css`
    width: auto;
  `,
  buttonWrapper: css`
    display: flex;
    align-items: center;
  `,
})
