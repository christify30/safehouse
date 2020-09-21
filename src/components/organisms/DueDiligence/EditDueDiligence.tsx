/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx, css } from '@emotion/core'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { DueDiligenceContainer } from './DueDiligenceContainer'
import {
  Tab,
  TabPane,
  Notification,
  TextInput,
  Button,
  Header,
  Loader,
} from 'components'

const EditDueDiligence = (props: any) => {
  const {
    error,
    updateDueDiligence,
    department,
    loading,
    fetchDueDiligences,
  } = props

  useEffect(() => {
    if (!department) {
      fetchDueDiligences()
    }
  }, [])

  return (
    <section css={styles.container}>
      {loading && <Loader />}
      {department && (
        <section>
          <Header
            title={department.name}
            buttonType="secondary"
            buttonUrl={`/due-diligence/delete/${department.id}`}
            buttonText="Delete department"
          />
          <Formik
            initialValues={{
              name: department.name,
            }}
            onSubmit={values => {
              const payload = {
                id: department.id,
                data: values,
              }
              updateDueDiligence(payload)
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required('DueDiligence Name is Required'),
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

export default DueDiligenceContainer(EditDueDiligence)

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
