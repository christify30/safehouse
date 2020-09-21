import jwtDecode from 'jwt-decode'

export interface UserData {
  email: string
  iat: Number
  exp: Number
  password?: string
}

export const decode = (token: string): UserData => {
  return jwtDecode(token)
}

export const getSession = () => {
  if (localStorage.jwt_token) {
    const token: UserData = getDecodedToken()
    const currentTime = Date.now() / 1000
    return token.exp > currentTime
  }
}

export const saveSession = (token: string) => {
  saveToken(token)
  const { user } = jwtDecode(token)
  return user
}

export const saveToken = (token: string) => {
  localStorage.setItem('jwt_token', token)
}

export const getToken = () => {
  return localStorage.getItem('jwt_token') || ''
}

export const getDecodedToken = () => {
  const token = localStorage.getItem('jwt_token') || ''
  const decoded: UserData = decode(token)
  return decoded
}

export const getUserData = () => {
  const { password, ...data } = getDecodedToken()
  return data
}

export const removeToken = () => {
  localStorage.removeItem('jwt_token')
}
