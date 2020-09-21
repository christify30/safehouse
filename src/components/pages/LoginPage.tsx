/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { Icon, LoginContainer, Text } from 'components'

export const LoginPage = () => {
  return (
    <section css={styles.container}>
      <div css={styles.title}>
        <Icon icon="onboarding" css={styles.spaceRight} />
        <Text text="Safehouse Admin" size={'extraLarge'} />
      </div>
      <div css={styles.loginContainer}>
        <LoginContainer />
      </div>
    </section>
  )
}

const styles = {
  container: css`
    flex-direction: column;
    display: flex;
    position: absolute;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  `,
  loginContainer: css`
    width: 400px;
    @media screen and (max-width: 780px) {
      width: 90%;
    }
  `,
  title: css`
    padding: 5px 0;
    align-items: left;
  `,
  spaceRight: css`
    margin-right: 20px;
  `,
}
