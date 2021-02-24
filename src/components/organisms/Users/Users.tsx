/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx, css } from '@emotion/core'
import { UsersContainer } from './UsersContainer'
import { Table, Loader, Header, Text, Notification } from 'components'
import { Link } from 'react-router-dom'
import { ThemeProps, theme } from 'theme'

const Users = (props: any) => {
  useEffect(() => {
    props.fetchUsers()
  }, [])

  const { users, loading, error } = props
  const classes = styles({ theme })

  return (
    <section css={classes.container}>
      <Header
        title="Users"
        buttonUrl="/users/new"
        buttonType="primary"
        buttonText="New user"
      />
      <section css={classes.usersContainer}>
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            {!error && users.length > 0 && (
              <Table
                tableData={users}
                tableHeader={tableHeader}
                route="/users"
              />
            )}
            {!loading && users && users.length === 0 && (
              <React.Fragment>
                <Text text="There is no data to show currently" />{' '}
                <Link to="/users/new">Create New User</Link>
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

export default UsersContainer(Users)

const tableHeader = [
  { title: 'First name', key: 'firstName' },
  { title: 'Last Name', key: 'lastName' },
  { title: 'Email', key: 'email' },
  { title: 'Country', key: 'country' },
  { title: 'Role', key: 'role' },
  { title: 'Verified', key: 'verified' },
  { title: 'Created', key: 'createdAt' },
]

const styles = (props: ThemeProps) => ({
  container: css`
    width: 100%;
  `,
  usersContainer: css`
    padding: 0 25px;
  `,
  error: css`
    width: 400px;
    position: absolute;
    bottom: 20px;
    right: 20px;
  `,
})
