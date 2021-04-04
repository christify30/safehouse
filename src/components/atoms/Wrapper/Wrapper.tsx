/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { theme, ThemeProps } from 'theme'

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const Wrapper = (props: WrapperProps) => {
  const { children } = props
  return (
    <div css={styles.wrapper}>
      {children}
    </div>
  )
}

const styles = {
  wrapper: css`
    display: flex;
  `,
}
