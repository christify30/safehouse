/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx, css } from '@emotion/core'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { PropertyListingContainer } from './PropertyListingContainer'
import {
  Tab,
  TabPane,
  Notification,
  TextInput,
  Button,
  Header,
  Loader,
} from 'components'

const EditPropertyListing = (props: any) => {
  const {
    error,
    updatepropertyListing,
    propertyListing,
    loading,
    fetchpropertyListings,
  } = props

  useEffect(() => {
    if (!propertyListing) {
      fetchpropertyListings()
    }
  }, [])

  return (
    <section css={styles.container}>
      {loading && <Loader />}
      {propertyListing && (
        <section>
          <Header
            title={propertyListing.name}
            buttonType="secondary"
            buttonIcon="delete"
            buttonUrl={`/property-listings/delete/${propertyListing.id}`}
            buttonText="Delete Property"
          />
          <Formik
            initialValues={{
              name: propertyListing.name,
            }}
            onSubmit={values => {
              const payload = {
                id: propertyListing.id,
                data: values,
              }
              updatepropertyListing(payload)
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required('Listing Name is Required'),
            })}>
            {props => {
              const {
                values,
                errors,
                handleChange,
                handleSubmit,
                handleReset,
              } = props

              return (
                <section css={styles.tabContainer}>
                  <Tab activeTab="1">
                    <TabPane tabIndex={1} tabName="General Information">
                      <form css={styles.form}>
                        <TextInput
                          name="name"
                          type="text"
                          placeholder="Name"
                          error={''}
                          value={values.name}
                          onChange={handleChange}
                        />

                        <Button
                          styleType="primary"
                          icon={loading ? 'loader' : 'save'}
                          type="submit"
                          onClick={handleSubmit}
                          css={css`
                            ${styles.button};
                            margin-right: 10px;
                          `}>
                          Save
                        </Button>

                        <Button
                          styleType="secondary"
                          css={styles.button}
                          onClick={handleReset}>
                          Cancel
                        </Button>
                      </form>
                    </TabPane>
                    <TabPane tabIndex={2} tabName="Users"></TabPane>
                  </Tab>
                </section>
              )
            }}
          </Formik>
          {error && (
            <Notification
              notificationType="error"
              text={error}
              css={styles.error}
            />
          )}
        </section>
      )}
    </section>
  )
}

export default PropertyListingContainer(EditPropertyListing)

const styles = {
  container: css`
    padding: 5px 30px;
    width: 100%;
  `,
  tabContainer: css`
    padding: 0 25px;
  `,
  marginBottom: css`
    margin-bottom: 50px;
  `,
  form: css`
    width: 50%;
    padding: 20px;
  `,
  button: css`
    width: 120px;
  `,
  error: css`
    width: 400px;
    position: absolute;
    bottom: 20px;
    right: 20px;
  `,
}
