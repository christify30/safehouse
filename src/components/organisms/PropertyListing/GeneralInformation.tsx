/** @jsx jsx */
import React, { useState, useRef, LegacyRef } from 'react'
import { jsx, css } from '@emotion/core'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { TextInput, Button, Select, ImageUpload } from 'components'
import { isEmpty } from 'lodash'

interface uploadValues {
  name: string,
  location: string,
  price: number,
  rating: number,
  category: string,
  description: string,
  basicFeatures: string,
  additionalFeatures: string,
  images: [],
  public: boolean,
  currency: string
}

export const GeneralInformation = (props: any) => {
  let items: object[] = []
  const [val, setVal] = useState('')
  const [files, setFIles] = useState({ image: "", name: "" });
  const { createPosition, loading, error } = props

  const handleEnter = (e: any) => {
    if (e.keyCode === 13) {
      // setItems(() => [...items, { key: 1, text: e.target.value }])
      setVal(e.target.value)
      items.push({ key: 1, text: val })
    }
  }

  const handleImageUpload = (e: any) => {
    // console.log(e.target.files[0], e.target.value);
    setFIles({ image: e.target.files[e.target.files.length - 1], name: e.target.value })
  }

  return (
    <section css={styles.container}>
      <Formik
        initialValues={{
          name: '',
          location: '',
          price: '',
          rating: '',
          category: '',
          description: '',
          basicFeatures: '',
          additionalFeatures: '',
          images: null,
          public: false,
          currency: 'NGN',
        }}
        onSubmit={(values:any) => {
           console.log(values);
          // const data = new FormData();
          // data.append('images', values.files
          // const imagesToBeUploaded = Array.from(values.images);
          createPosition({
            ...values,
            basicFeatures: values.basicFeatures.split(','),
            additionalFeatures: values.additionalFeatures.split(','),
            images: Array.from(values.images)
          })
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name is Required'),
          location: Yup.string().required('Location is Required'),
          price: Yup.number().required('Price is Required'),
          images: Yup.mixed().required('Please add images'),
          rating: Yup.number(),
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
              {!isEmpty(files.name) && <img css={styles.image} src={window.URL.createObjectURL(files.image)} />}
              <TextInput
                name="images"
                multiple
                accept = 'image/*'
                type="file"
                placeholder="image"
                error={errors.images || ''}
                value={files.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("images", e.currentTarget.files);
                  handleImageUpload(e);
                }}
              />
              <TextInput
                name="description"
                type="text"
                placeholder="description"
                error={errors.description || ''}
                value={values.description}
                onChange={handleChange}
              />

              <TextInput
                name="price"
                type="text"
                placeholder="Price"
                error={errors.price || ''}
                value={values.price}
                onChange={handleChange}
              />
              <TextInput
                name="rating"
                type="number"
                placeholder="rating"
                min="1"
                max="5"
                error={errors.rating || ''}
                value={values.rating}
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
              {/* <Select
                name="basicFeatures"
                list={BasicFeaturesOptions}
                placeholder="Basic Features"
                value={values.basicFeatures}
                setFieldValue={(v: any) => setFieldValue("basicFeatures", [v])}
                error={''}
              /> */}
              <TextInput
                name="basicFeatures"
                type="text"
                placeholder="Enter basic features Seperated with commas"
                error={errors.basicFeatures || ''}
                value={values.basicFeatures}
                onChange={handleChange}
                onKeyDown={handleEnter}
              />
              {/* <div>
                {items.map(item => (
                  <span>{item.key}</span>
                ))}
              </div> */}

              <TextInput
                name="additionalFeatures"
                type="text"
                placeholder="Enter Additional Features Seperated with commas"
                error={errors.additionalFeatures || ''}
                value={values.additionalFeatures}
                onChange={handleChange}
                onKeyDown={handleEnter}
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
  image: css`
   width: 100px;
   height: 100px
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
  `
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
