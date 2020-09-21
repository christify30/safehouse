/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { DueDiligenceContainer } from './DueDiligenceContainer'
import { Tab, TabPane, Notification, Header } from 'components'
import { GeneralInformation } from './GeneralInformation'

const NewDueDiligence = (props: any) => {
  const { error, createDueDiligence, loading } = props
  return (
    <section css={styles.container}>
      <Header title="New department" />
      <section css={styles.tabContainer}>
        <Tab activeTab="1">
          <TabPane tabIndex={1} tabName="General Information">
            <GeneralInformation
              createDueDiligence={createDueDiligence}
              loading={loading}
              error={error}
            />
          </TabPane>
          <TabPane tabIndex={2} tabName="Users"></TabPane>
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

export default DueDiligenceContainer(NewDueDiligence)

const styles = {
  container: css`
    padding: 10px 30px;
    width: 100%;
  `,
  marginBottom: css`
    margin-bottom: 50px;
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
