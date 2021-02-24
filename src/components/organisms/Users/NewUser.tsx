/** @jsx jsx */
import React from 'react'
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
} from 'components'

const NewUser = (props: any) => {
  const {
    loading,
    error,
    positions: positionsList,
    departments: departmentsList,
    createUser,
  } = props

  return (
    <section css={styles.container}>
      <Header title="New user" />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          country: '',
          phoneNumber: '',
          email: '',
        }}
        onSubmit={values => {
          createUser(values)
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('First Name is Required'),
          lastName: Yup.string().required('Last Name is Required'),
          country: Yup.string().required('Country is Required'),
          phoneNumber: Yup.string().required('Phone Number is Required'),
          email: Yup.string().required('Email is Required'),
        })}>
        {props => {
          const {
            values,
            errors,
            handleChange,
            handleSubmit,
            handleReset,
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
                      error={errors.firstName || ''}
                      value={values.firstName}
                      onChange={handleChange}
                    />

                    <TextInput
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      error={errors.lastName || ''}
                      value={values.lastName}
                      onChange={handleChange}
                    />

                    <TextInput
                      name="email"
                      type="email"
                      placeholder="Email"
                      error={errors.email || ''}
                      value={values.email}
                      onChange={handleChange}
                    />

                    <TextInput
                      name="phoneNumber"
                      type="text"
                      placeholder="Phone Number"
                      error={errors.phoneNumber || ''}
                      value={values.phoneNumber}
                      onChange={handleChange}
                    />

                    <TextInput
                      name="country"
                      type="text"
                      placeholder="Country"
                      error={errors.country || ''}
                      value={values.country}
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
                <TabPane tabIndex={2} tabName="Comments"></TabPane>
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
  )
}

export default UsersContainer(NewUser)

const styles = {
  container: css`
    padding: 5px 30px;
    width: 100%;
  `,
  tabContainer: css`
    padding: 0 25px;
  `,
  error: css`
    width: 400px;
    position: absolute;
    bottom: 20px;
    right: 20px;
  `,
  button: css`
    width: 'auto';
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
