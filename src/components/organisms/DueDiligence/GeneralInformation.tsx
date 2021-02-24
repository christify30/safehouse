/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { TextInput, Button } from 'components'

export const GeneralInformation = (props: any) => {
  const { loading, error, createDueDiligence } = props

  return (
    <section css={styles.container}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          propertyOwnerName: '',
          propertyAddress: '',
          titleSurveyNumber: '',
          transactionReference: '',
          transactionStatus: '',
          titleDeed: '',
        }}
        onSubmit={values => {
          createDueDiligence(values)
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('First Name is Required'),
          lastName: Yup.string().required('Last Name is Required'),
          phoneNumber: Yup.string().required('Phone Number is Required'),
          email: Yup.string().required('Email is Required'),
          propertyOwnerName: Yup.string().required(
            'Property OWner Name is Required'
          ),
          propertyAddress: Yup.string().required(
            'Property Address is Required'
          ),
          titleSurveyNumber: Yup.string().required(
            'Title Survey Number is Required'
          ),
          transactionReference: Yup.string(),
          transactionStatus: Yup.string(),
          titleDeed: Yup.string(),
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
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                error={''}
                value={values.phoneNumber}
                onChange={handleChange}
              />

              <TextInput
                name="email"
                type="text"
                placeholder="Email"
                error={''}
                value={values.email}
                onChange={handleChange}
                disabled={true}
              />

              <TextInput
                name="propertyOwnerName"
                type="text"
                placeholder="Property Owner Name"
                error={''}
                value={values.propertyOwnerName}
                onChange={handleChange}
              />

              <TextInput
                name="propertyAddress"
                type="text"
                placeholder="Property Address"
                error={''}
                value={values.propertyAddress}
                onChange={handleChange}
              />

              <TextInput
                name="titleDeed"
                type="text"
                placeholder="Title Deed"
                error={''}
                value={values.titleDeed}
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
