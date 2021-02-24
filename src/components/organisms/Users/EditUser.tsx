/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx, css } from '@emotion/core'
import { UsersContainer } from './UsersContainer'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
  Tab,
  TabPane,
  Notification,
  TextInput,
  Select,
  Button,
  Header,
  Loader,
} from 'components'
import { history } from 'utils'

const EditUser = (props: any) => {
  const { loading, error, updateUser, user, fetchUsers, users } = props

  useEffect(() => {
    if (!users.length) {
      fetchUsers()
    }
  }, [])

  const handleCancel = () => {
    history.push('/users')
  }
  return (
    <section css={styles.container}>
      {loading && <Loader />}
      {user && (
        <section>
          <Header
            title={`${user.firstName} ${user.lastName}`}
            buttonUrl={`/users/delete/${user.id}`}
            buttonType="secondary"
            buttonIcon="delete"
            buttonText="Delete user"
          />
          <Formik
            enableReinitialize={true}
            initialValues={user}
            onSubmit={values => {
              const payload = {
                id: user._id,
                ...values,
              }
              updateUser(payload)
            }}
            validationSchema={Yup.object().shape({
              firstName: Yup.string().required('First Name is Required'),
              lastName: Yup.string().required('Last Name is Required'),
              email: Yup.string().required('Email is Required'),
              country: Yup.string().required('Country is Required'),
              role: Yup.string().required('Role is Required'),
              comments: Yup.string(),
            })}>
            {props => {
              const {
                values,
                errors,
                handleChange,
                handleSubmit,
                setFieldValue,
              } = props

              return (
                <section css={styles.tabContainer}>
                  <Tab activeTab="1">
                    <TabPane tabIndex={1} tabName="General Information">
                      <form css={styles.form}>
                        <TextInput
                          name="firstName"
                          type="text"
                          placeholder="First Name"
                          error={''}
                          value={values.firstName}
                          onChange={handleChange}
                        />

                        <TextInput
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                          error={''}
                          value={values.lastName}
                          onChange={handleChange}
                        />

                        <TextInput
                          name="email"
                          type="text"
                          placeholder="Email"
                          error={''}
                          value={values.email}
                          onChange={handleChange}
                        />

                        <TextInput
                          name="phoneNumber"
                          type="text"
                          placeholder="Phone Number"
                          error={''}
                          value={values.phoneNumber}
                          onChange={handleChange}
                        />

                        <TextInput
                          name="country"
                          type="text"
                          placeholder="Country"
                          error={''}
                          value={values.country}
                          onChange={handleChange}
                        />

                        <Select
                          name="role"
                          list={userRoleOption}
                          placeholder="Select role"
                          value={values.role}
                          setFieldValue={setFieldValue}
                          error={''}
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
                          onClick={handleCancel}>
                          Cancel
                        </Button>
                      </form>
                    </TabPane>
                    <TabPane tabIndex={2} tabName="KYC Documents"></TabPane>
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

export default UsersContainer(EditUser)

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
  error: css`
    width: 400px;
    position: absolute;
    bottom: 20px;
    right: 20px;
  `,
  button: css`
    width: 120px;
  `,
  buttonWrapper: css`
    display: flex;
    align-items: center;
  `,
  form: css`
    width: 50%;
    padding: 20px;
  `,
}

const userRoleOption = [
  { id: 'ADMIN', name: 'ADMIN' },
  { id: 'USER', name: 'USER' },
]
