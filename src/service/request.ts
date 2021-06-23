import { getToken } from '../utils/session'
import config from '../config'
const { apiBaseUrl } = config

export interface Options {
  url: string
  data?: object
}

interface Headers {
  [key: string]: string
}

export const makeRequest = (
  options: Options,
  withToken: boolean,
  method: string
): Promise<any> => {
  const _options = options || {}
  const headers: Headers = {
    'Content-type': 'application/json',
  }
  if (withToken) {
    const accessToken = getToken()
    headers['Authorization'] = `Bearer ${accessToken}`
  }

  const request = new Request(`${apiBaseUrl}${_options.url}`, {
    method: method,
    mode: 'cors',
    headers,
    body: JSON.stringify(_options.data),
  })

  const defer = new Promise(function(resolve, reject) {
    fetch(request)
      .then(response => {
        if (response.ok) {
          return resolve(response.json())
        } else {
          response.text().then(text => {
            return reject(JSON.parse(text))
          })
        }
      })
      .catch(error => {
        reject(error)
      })
  })

  return defer
}

export const api = {
  post: (options: Options, withToken: boolean = true) => {
    return makeRequest(options, withToken, 'POST')
  },
  put: (options: Options, withToken: boolean = true) => {
    return makeRequest(options, withToken, 'PUT')
  },
  get: (options: Options, withToken: boolean = true) => {
    return makeRequest(options, withToken, 'GET')
  },
  delete: (options: Options, withToken: boolean = true) => {
    return makeRequest(options, withToken, 'DELETE')
  },
}
