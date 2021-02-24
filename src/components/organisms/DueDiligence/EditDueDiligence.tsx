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
  Select,
} from 'components'

const EditDueDiligence = (props: any) => {
  const {
    error,
    updateDueDiligence,
    dueDiligence,
    dueDiligenceList,
    loading,
    fetchDueDiligences,
  } = props

  useEffect(() => {
    if (!dueDiligenceList.length) {
      fetchDueDiligences()
    }
  }, [])

  return (
    <section css={styles.container}>
      {loading && <Loader />}
      {dueDiligence && (
        <section>
          <Header
            title={`${dueDiligence.firstName} ${dueDiligence.lastName}`}
            buttonType="secondary"
            buttonUrl={`/due-diligence/delete/${dueDiligence._id}`}
            buttonText="Delete record"
          />
          <Formik
            initialValues={{
              firstName: dueDiligence.firstName,
              lastName: dueDiligence.lastName,
              phoneNumber: dueDiligence.phoneNumber,
              email: dueDiligence.email,
              propertyOwnerName: dueDiligence.propertyOwnerName,
              propertyAddress: dueDiligence.propertyAddress,
              titleSurveyNumber: dueDiligence.titleSurveyNumber,
              transactionReference: dueDiligence.transactionReference,
              transactionStatus: dueDiligence.transactionStatus,
              titleDeed: dueDiligence.titleDeed,
            }}
            onSubmit={values => {
              const payload = {
                id: dueDiligence._id,
                ...values,
              }
              updateDueDiligence(payload)
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
                setFieldValue,
              } = props

              return (
                <section css={styles.tabContainer}>
                  <Tab activeTab="1">
                    <TabPane tabIndex={1} tabName="General Information">
                      <div css={styles.wrapper}>
                        <form css={styles.form}>
                          <TextInput
                            name="transactionReference"
                            type="text"
                            placeholder="Transaction Reference"
                            error={''}
                            value={values.transactionReference}
                            onChange={handleChange}
                            disabled
                          />

                          <Select
                            name="transactionStatus"
                            list={transactionStatusOptions}
                            placeholder="Status"
                            value={values.transactionStatus}
                            setFieldValue={setFieldValue}
                            error={''}
                          />

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
                            Update
                          </Button>

                          <Button
                            styleType="secondary"
                            css={styles.button}
                            onClick={handleReset}>
                            Cancel
                          </Button>
                        </form>
                        <div css={styles.paymentDetails}>
                          <TextInput
                            type="text"
                            name="Payment Transaction ID"
                            placeholder="Payment Transaction ID"
                            error={''}
                            value={dueDiligence.payment.transactionId || ''}
                            disabled
                          />
                          <TextInput
                            type="text"
                            name="Payment Transaction Reference"
                            placeholder="Payment Transaction Reference"
                            error={''}
                            value={
                              dueDiligence.payment
                                .processorTransactionReference || ''
                            }
                            disabled
                          />
                          <TextInput
                            type="text"
                            name="Payment Transaction Reference"
                            placeholder="Payment Transaction Reference"
                            error={''}
                            value={
                              dueDiligence.payment
                                .processorTransactionReference || ''
                            }
                            disabled
                          />
                          <TextInput
                            type="text"
                            name="Payment Reference"
                            placeholder="Payment Reference"
                            error={''}
                            value={dueDiligence.payment.paymentReference || ''}
                            disabled
                          />
                          <TextInput
                            type="text"
                            name="Payment Status"
                            placeholder="Payment Status"
                            error={''}
                            value={dueDiligence.payment.status || ''}
                            disabled
                          />
                          <TextInput
                            type="text"
                            name="Amount Paid"
                            placeholder="Amount Paid"
                            error={''}
                            value={dueDiligence.payment.amount || ''}
                            disabled
                          />
                          <TextInput
                            type="text"
                            name="Payment Currency"
                            placeholder="Payment Currency"
                            error={''}
                            value={dueDiligence.payment.currency || ''}
                            disabled
                          />
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabIndex={2} tabName="Reports"></TabPane>
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
  wrapper: css`
    display: flex;
    align-items: baseline;
    padding: 20px;
  `,
  paymentDetails: css`
    flex: 1;
  `,
}

const transactionStatusOptions = [
  { id: 'INITIATED', name: 'INITIATED' },
  { id: 'IN_PROGRESS', name: 'IN_PROGRESS' },
  { id: 'COMPLETED', name: 'COMPLETED' },
]
