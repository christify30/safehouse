/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { Text, Button } from 'components'
import { Link } from 'react-router-dom'
import { titleFromRoute } from 'utils'

interface HeaderProps {
  title: string
  buttonType?: string
  buttonUrl?: string
  buttonIcon?: string
  buttonText?: string
}

export const Header = (props: HeaderProps) => {
  const { title, buttonUrl, buttonType, buttonIcon, buttonText } = props
  
  return (
    <section css={styles.container}>
      <Text text={title} size="extraLarge" />
      {buttonType && (
        <Link to={buttonUrl || '/'} css={styles.newUserButton}>
          <Button icon={buttonIcon || ''} styleType={buttonType}>
            {buttonText}
          </Button>
        </Link>
      )}
    </section>
  )
}

const styles = {
  container: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 25px;
    @media screen and (max-width: 780px) {
      padding-left: 70px;
      padding-right: 25px;
    }
  `,
  newUserButton: css`
    margin-left: auto;
  `,
}
