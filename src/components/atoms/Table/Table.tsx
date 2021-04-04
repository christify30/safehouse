/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'
import { history } from 'utils'
import { theme, ThemeProps } from 'theme'

interface HeaderProps<T> {
  title: string
  key: keyof T
}

interface TableProps<T> {
  tableData: any
  tableHeader: HeaderProps<T>[]
  route: string
}

export const Table = <T extends {}>(props: TableProps<T>) => {
  const classes = styles({ theme })
  const { tableData, tableHeader, route } = props

  const getUser = (id: string) => {
    history.push(`${route}/edit/${id}`)
  }

  return (
    <section css={classes.wrapper}>
      <table css={classes.container}>
        <thead>
          <tr>
            {tableHeader.map(({ title }) => {
              return <th key={title}>{title}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data: any) => {
            return (
              <tr onClick={() => getUser(data._id)}>
                {tableHeader.map(({ key }) =>
                  key === 'createdAt' ? (
                    <td key={data.key}>{data[key].split('T')[0]}</td>
                  ) : (
                    <td key={data.key}>{data[key]}</td>
                  )
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

const styles = (props: ThemeProps) => ({
  wrapper: css`
    height: 100vh;
    overflow-y: auto;
  `,
  container: css`
    font-family: ${theme.getFont('primary')(props)};
    width: 100%;
    border-collapse: collapse;
    box-sizing: border-box;
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    margin: 0;
    th,
    td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #e6e6e6;
    }
    th {
      font-weight: 600;
      color: #fff;
      background: #92dd5f;
      position: sticky;
      top: 0;
      border-top: 2px solid #62e000;
    }
    tr {
      cursor: pointer;
    }
    @media screen and (max-width: 780px) {
      th {
        display: none;
      }
      tbody {
        border-top: 2px solid #62e000;
      }
      /* width: 90%; */
    }
  `,
})
