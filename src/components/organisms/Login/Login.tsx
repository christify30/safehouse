/** @jsx jsx */
import React, { Component, useState, useEffect } from 'react'
import { jsx, css } from '@emotion/core'
import { theme, ThemeProps } from 'theme'
import { Redirect } from 'react-router-dom'
import { Text, TextInput, Button, Notification } from 'components'
import { AuthState } from 'store/authentication/reducer'

interface LoginProps {
  user: AuthState
  login: any
}

export const Login = (props: LoginProps) => {
  const [form, setValues] = useState({
    email: '',
    password: '',
    loading: false,
    error: '',
  })

  useEffect(() => {
    setValues({
      ...form,
      error: props.user.error,
    })
  }, [props.user.error])

  if (props.user.isAuthenticated) {
    return <Redirect to="/users" />
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()

    const userData = {
      email: form.email,
      password: form.password,
    }
    props.login(userData)
  }

  const onCloseError = (e: React.SyntheticEvent): void => {
    setValues({
      ...form,
      error: '',
    })
  }

  const { email, password, error } = form
  const { loading } = props.user

  const classes = styles({ theme })
  return (
    <section css={classes.container}>
      <div css={classes.title}>
        <Text
          text="Log In"
          color={{
            type: 'grey',
            shade: 500,
          }}
        />
      </div>

      {error && (
        <Notification
          notificationType="error"
          text={error}
          onClose={onCloseError}
        />
      )}

      <form css={classes.form} onSubmit={onSubmit}>
        <TextInput
          name="email"
          type="email"
          placeholder="Email"
          error={''}
          onChange={onChange}
          value={email}
        />

        <TextInput
          name="password"
          type="password"
          placeholder="Password"
          error={''}
          onChange={onChange}
          value={password}
        />

        <Button
          css={classes.buttonSubmit}
          type="submit"
          styleType="primary"
          icon={loading ? 'loader' : ''}>
          Log In
        </Button>
      </form>
    </section>
  )
}

const styles = (props: ThemeProps) => ({
  container: css`
    width: 100%;
    border: 1px solid ${theme.getColor('grey', 200)(props)};
    border-top: 2px solid ${theme.getColor('primary', 400)(props)};
  `,
  title: css`
    padding: 20px 15px;
    border-bottom: 1px solid ${theme.getColor('grey', 200)(props)};
  `,
  form: css`
    padding: 15px;
    input {
      margin-bottom: 20px;
    }
  `,
  buttonSubmit: css`
    width: 130px;
  `,
})
