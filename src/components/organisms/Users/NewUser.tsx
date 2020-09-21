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
          name: '',
          surname: '',
          positionsId: '',
          departmentsId: '',
          comments: '',
        }}
        onSubmit={values => {
          createUser(values)
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name is Required'),
          surname: Yup.string().required('Surname is Required'),
          positionsId: Yup.string().required('Position is Required'),
          departmentsId: Yup.string().required('Department is Required'),
          comments: Yup.string(),
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
                      name="name"
                      type="text"
                      placeholder="Name"
                      error={errors.name || ''}
                      value={values.name}
                      onChange={handleChange}
                    />

                    <TextInput
                      name="surname"
                      type="text"
                      placeholder="Surname"
                      error={errors.surname || ''}
                      value={values.surname}
                      onChange={handleChange}
                    />

                    <Select
                      name="positionsId"
                      list={positionsList}
                      placeholder="Select Position"
                      value={values.positionsId}
                      setFieldValue={setFieldValue}
                      error={errors.positionsId}
                    />
                    <Select
                      name="departmentsId"
                      list={departmentsList}
                      placeholder="Select Department"
                      value={values.departmentsId}
                      setFieldValue={setFieldValue}
                      error={errors.departmentsId}
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
                <TabPane tabIndex={2} tabName="Comments">
                  <form css={styles.form}>
                    <TextInput
                      name="comments"
                      type="text"
                      placeholder="Comments"
                      error={errors.comments || ''}
                      value={values.comments}
                      onChange={handleChange}
                    />
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
                      onClick={handleReset}>
                      Cancel
                    </Button>
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
