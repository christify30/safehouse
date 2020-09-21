/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { theme, ThemeProps } from 'theme'

import { Icon, Text } from 'components'

export const ImageUpload = () => {
  const classes = styles({ theme })
  return (
    <div css={classes.wrapper}>
      <Text text="Image" size="medium" css={classes.text} />
      <label htmlFor="upload-photo">
        <Icon
          icon="user"
          width={130}
          css={classes.labelBox}
          color={{ type: 'light', shade: 300 }}
        />
      </label>
      <input
        css={classes.upload}
        type="file"
        name="upload-photo"
        id="upload-photo"
      />
    </div>
  )
}

const styles = (props: ThemeProps) => ({
  upload: css`
    opacity: 0;
    display: none;
    position: absolute;
    z-index: -1;
  `,
  wrapper: css`
    font-family: ${theme.getFont('primary')(props)};
    color: ${theme.getColor('grey', 300)(props)};
    label {
      cursor: pointer;
    }
  `,
  text: css`
    display: block;
  `,

  labelBox: css`
    text-align: center;
    display: inline-block;
    border: 1px solid ${theme.getColor('light', 300)(props)};
    vertical-align: bottom;
    height: 130px;
    width: 150px;
    padding: 12px 0px 0px 0px;
  `,
})
