/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { TextInput, Button } from 'components'

export const GeneralInformation = (props: any) => {
  const { createPosition, loading, error } = props

  return (
    <section css={styles.container}>
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={values => {
          createPosition(values)
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name is Required'),
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
            <form css={styles.form}>
              <TextInput
                name="name"
                type="text"
                placeholder="Property name"
                error={errors.name || ''}
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
          )
        }}
      </Formik>
    </section>
  )
}

const styles = {
  container: css`
    display: flex;
    flex-direction: row;
    padding: 30px;
  `,
  form: css`
    width: 50%;
    padding: 20px;
  `,
  button: css`
    width: 120px;
  `,
  imagePane: css`
    padding: 20px;
  `,
}
