import { get } from 'lodash'

export const color = (type = '', shade = 0) => (props: any) => {
  return get(props, ['theme', 'colors', type, shade])
}

export const font = (type = 'primary') => (props: any) => {
  return get(props, ['theme', 'fonts', type])
}

export const fontSize = (type = 'regular') => (props: any) => {
  return get(props, ['theme', 'fontSize', type])
}

export const spacing = (key = 500) => (props: any) =>
  get(props, ['theme', 'spacings', key])

export const prop = (key: string, defaultValue: string) => (props: any) =>
  get(props, key, defaultValue)
