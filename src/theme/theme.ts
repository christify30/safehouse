import * as utils from './utils'

interface ThemeColor {
  [shade: number]: string
}

const primary: ThemeColor = {
  300: '#92DD5F',
  400: '#308976',
  500: '#62E000',
}

const secondary: ThemeColor = {
  500: '#1440EF',
}

const success: ThemeColor = {
  500: '#5C9A47',
  400: '#60AA45',
  300: '#68C049',
}

const error: ThemeColor = {
  500: '#D93737',
  400: '#F23F3F',
  300: '#FC5B5B',
}

const grey: ThemeColor = {
  500: '#1A1A1A',
  400: '#CCCCCC',
  300: '#666666',
  200: '#E6E6E6',
  100: '#1C1C1C',
}

const light: ThemeColor = {
  500: '#FFFFFF',
  400: '#2B2B2B',
  300: '#F1F1F1',
  200: '#999999',
}

const dark: ThemeColor = {
  500: '#000000',
  400: '#4D4D4D',
}

interface ThemeColors {
  primary: ThemeColor
  secondary: ThemeColor
  success: ThemeColor
  error: ThemeColor
  grey: ThemeColor
  light: ThemeColor
  dark: ThemeColor
}

const colors: ThemeColors = {
  primary,
  secondary,
  success,
  error,
  grey,
  light,
  dark,
}

interface Spacing {}

const spacings: Spacing = {}

interface Font {
  primary: string
}

const fonts: Font = {
  primary: 'Titillium Web',
}

interface FontSize {
  small: string
  medium: string
  regular: string
  large: string
  extraLarge: string
}

const fontSize: FontSize = {
  small: '10px',
  medium: '12px',
  regular: '14px',
  large: '16px',
  extraLarge: '20px',
}

export interface ThemeProps {
  theme: Theme
}

interface Theme {
  colors: ThemeColors
  spacings: Spacing
  fonts: Font
  fontSize: FontSize
  getColor: any
  getFont: any
  getFontSize: any
  getSpacing: any
  getProp: any
}

export const theme: Theme = {
  colors,
  spacings,
  fonts,
  fontSize,
  getColor: utils.color,
  getFont: utils.font,
  getFontSize: utils.fontSize,
  getSpacing: utils.spacing,
  getProp: utils.prop,
}
