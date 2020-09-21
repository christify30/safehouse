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

  const getUser = (id: number) => {
    history.push(`${route}/edit/${id}`)
  }

  return (
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
            <tr onClick={() => getUser(data.id)}>
              {tableHeader.map(({ key }) => (
                <td key={data.key}>{data[key]}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const styles = (props: ThemeProps) => ({
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
      font-weight: 500;
      border-top: 2px solid #62e000;
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
