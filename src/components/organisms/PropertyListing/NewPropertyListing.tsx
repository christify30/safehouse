/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { PropertyListingContainer } from './PropertyListingContainer'
import { Tab, TabPane, Notification, Header } from 'components'
import { GeneralInformation } from './GeneralInformation'

const PropertyListing = (props: any) => {
  const { error, createPropertyListing, loading } = props
  return (
    <section css={styles.container}>
      <Header title="New Property" />
      <section css={styles.tabContainer}>
        <Tab activeTab="1">
          <TabPane tabIndex={1} tabName="General Information">
            <GeneralInformation
              createPosition={createPropertyListing}
              loading={loading}
              error={error}
            />
          </TabPane>
          <TabPane tabIndex={2} tabName="Comments"></TabPane>
          <TabPane tabIndex={3} tabName="Transactions"></TabPane>
        </Tab>
      </section>
      {error && (
        <Notification
          notificationType="error"
          text={error}
          css={styles.error}
        />
      )}
    </section>
  )
}

export default PropertyListingContainer(PropertyListing)

const styles = {
  container: css`
    padding: 10px 30px;
    width: 100%;
  `,
  error: css`
    width: 400px;
    position: absolute;
    bottom: 20px;
    right: 20px;
  `,
  tabContainer: css`
    padding: 0 25px;
  `,
}
