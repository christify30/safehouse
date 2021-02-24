/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { TextInput, Button, Select } from 'components'

export const GeneralInformation = (props: any) => {
  const { createPosition, loading, error } = props

  return (
    <section css={styles.container}>
      <Formik
        initialValues={{
          name: '',
          location: '',
          price: '',
          category: '',
          description: '',
          basicFeatures: '',
          additionalFeatures: '',
          images: '',
          public: false,
          currency: 'NGN',
        }}
        onSubmit={values => {
          createPosition(values)
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name is Required'),
          location: Yup.string().required('Location is Required'),
          price: Yup.number().required('Price is Required'),
          description: Yup.string().required('Description is Required'),
          category: Yup.string().required('Category is Required'),
          basicFeatures: Yup.string().required('BasicFeatures is Required'),
          additionalFeatures: Yup.string().required(
            'AdditionalFeatures is Required'
          ),
          public: Yup.boolean().required('Public is Required'),
          currency: Yup.string().required('Currency is Required'),
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
            <form css={styles.form}>
              <TextInput
                name="name"
                type="text"
                placeholder="Property name"
                error={errors.name || ''}
                value={values.name}
                onChange={handleChange}
              />
              <TextInput
                name="location"
                type="text"
                placeholder="Property Location"
                error={errors.location || ''}
                value={values.location}
                onChange={handleChange}
              />

              <TextInput
                name="currency"
                type="text"
                placeholder="Currency"
                error={errors.currency || ''}
                value={values.currency}
                disabled
              />
              <TextInput
                name="price"
                type="number"
                placeholder="Price"
                error={errors.price || ''}
                value={values.price}
                onChange={handleChange}
              />

              <Select
                name="category"
                list={PropertyCategoryOptions}
                placeholder="Category"
                value={values.category}
                setFieldValue={setFieldValue}
                error={''}
              />
              <Select
                name="additionalFeatures"
                list={BasicFeaturesOptions}
                placeholder="Basic Features"
                value={values.basicFeatures}
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

const PropertyCategoryOptions = [
  { id: 'LAND', name: 'LAND' },
  { id: 'HOUSE', name: 'HOUSE' },
]

const BasicFeaturesOptions = [
  { id: 'HOT_TUB', name: 'Hot Tub' },
  { id: 'SWIMMING_POOL', name: 'Swimming Pool' },
  { id: 'BALCONY', name: 'Balcony' },
  { id: 'FIRE_PLACE', name: 'Fireplace' },
]
