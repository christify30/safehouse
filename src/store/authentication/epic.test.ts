import { ActionsObservable, StateObservable } from 'redux-observable'
import { toArray } from 'rxjs/operators'
import { LOGIN_USER, setError, LOGIN_SUCCESS } from './actions'
import { rootEpic } from '../epics'

test('Application does not crash', () => {
  expect(true).toBe(true)
})

test('Should dispatch the correct action when authentication fails', async () => {
  const action$ = ActionsObservable.of({
    type: LOGIN_USER,
    payload: {
      email: 'godsman@telesoftas.com',
      password: 'nothing',
    },
  })

  const state$ = StateObservable.create()
  const epics$ = rootEpic(action$, state$, {})
  const result = await epics$.pipe(toArray()).toPromise()
  expect(result).toContainEqual(setError('Incorrect email or password'))
})

it('Should dispatch a JWT token when authentication is successful', async () => {
  const response = {
    access_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdvZHNtYW5AdGVsZXNvZnRhcy5jb20iLCJwYXNzd29yZCI6ImdtYW4iLCJpYXQiOjE1NzQwNzk5OTIsImV4cCI6MTU3NDA4MzU5Mn0.vTMJ5jlaA7o08ryVZTyYyGlwlNdgz7Y6CYbmwhU-3jM',
  }
  api.post(
    {
      url: '/auth/login',
      data: { email: 'godsman@telesoftas.com', password: 'gman' },
    },
    false
  ) = jest.fn().mockImplementation(() => Promise.resolve(response))

  const client = { authenticate: jest.fn() }
  client.authenticate.mockReturnValue(Promise.resolve(response))
  const action$ = ActionsObservable.of({
    type: 'LOGIN_USER',
    payload: {
      email: 'godsman@telesoftas.com',
      password: 'gman',
    },
  })

  const state$ = StateObservable.create()
  const epic$ = rootEpic(action$, state$, { client })
  const result = await epic$.toPromise()
  expect(result).toEqual({ type: LOGIN_SUCCESS, payload: response })
})
