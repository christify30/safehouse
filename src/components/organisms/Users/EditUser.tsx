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
  const {
    loading,
    error,
    positions: positionsList,
    departments: departmentsList,
    updateUser,
    user,
    fetchUsers,
    fetchPositions,
    fetchDepartments,
    users,
  } = props

  console.log(user)
  console.log(users)

  useEffect(() => {
    if (!user) {
      fetchPositions()
      fetchDepartments()
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
            title={`${user.name} ${user.surname}`}
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
                id: user.id,
                data: values,
              }
              updateUser(payload)
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required('Name is Required'),
              surname: Yup.string().required('Surname is Required'),
              positionsId: Yup.number().required('Position is Required'),
              departmentsId: Yup.number().required('Department is Required'),
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
                          name="name"
                          type="text"
                          placeholder="Name"
                          error={''}
                          value={values.name}
                          onChange={handleChange}
                        />

                        <TextInput
                          name="surname"
                          type="text"
                          placeholder="Surname"
                          error={''}
                          value={values.surname}
                          onChange={handleChange}
                        />

                        <Select
                          name="positionsId"
                          list={positionsList}
                          placeholder="Select Position"
                          value={values.positionsId}
                          setFieldValue={setFieldValue}
                          error={''}
                        />
                        <Select
                          name="departmentsId"
                          list={departmentsList}
                          placeholder="Select Department"
                          value={values.departmentsId}
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
                    <TabPane tabIndex={2} tabName="Comments">
                      <form css={styles.form}>
                        <TextInput
                          name="comments"
                          type="text"
                          placeholder="Comments"
                          error={''}
                          value={values.comments}
                          onChange={handleChange}
                        />
                        <div css={styles.buttonWrapper}>
                          <Button
                            styleType="primary"
                            icon="save"
                            css={css`
                              ${styles.button};
                              margin-right: 10px;
                            `}
                            onClick={handleSubmit}>
                            Save
                          </Button>
                          <Button
                            styleType="secondary"
                            css={styles.button}
                            onClick={handleCancel}>
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </TabPane>
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
