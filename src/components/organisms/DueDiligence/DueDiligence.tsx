/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'
import { ThemeProps, theme } from 'theme'
import { DueDiligenceContainer } from './DueDiligenceContainer'
import { Table, Loader, Header, Text, Notification } from 'components'

const DueDiligence = (props: any) => {
  useEffect(() => {
    props.fetchDueDiligences()
  }, [])

  const { dueDiligence, loading, error } = props
  const classes = styles({ theme })

  return (
    <section css={classes.container}>
      <Header
        title="Due Diligence"
        buttonUrl="/due-diligence/new"
        buttonType="primary"
        buttonText="New Due Diligence record"
      />
      <section css={classes.listContainer}>
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            {!error && dueDiligence.length > 0 && (
              <Table
                tableData={dueDiligence}
                tableHeader={tableHeader}
                route="due-diligence"
              />
            )}
            {dueDiligence && dueDiligence.length === 0 && (
              <React.Fragment>
                <Text text="There is no data to show currently" />{' '}
                <Link to="/due-diligence/new">Create New Record</Link>
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

export default DueDiligenceContainer(DueDiligence)

const tableHeader = [{ title: 'Department name', key: 'name' }]

const styles = (props: ThemeProps) => ({
  container: css`
    width: 100%;
  `,
  listContainer: css`
    display: flex;
    flex-direction: column;
    padding: 0 25px;
  `,
  error: css`
    width: 400px;
    position: absolute;
    bottom: 20px;
    right: 20px;
  `,
})
