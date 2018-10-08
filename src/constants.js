export const baseUrl = 'http://localhost:4000'

export const sleep = time => new Promise(
  resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
)

export const localStorageJwtKey = 'currentUserJwt'
