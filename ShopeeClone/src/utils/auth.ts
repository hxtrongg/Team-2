import { User } from 'src/types/user.type'

export const LocalStorageEventTarget = new EventTarget()

export const setAccessTokenToLS = (access_token: string) => {
  localStorage.setItem('Access_token', access_token)
}

export const clearLS = () => {
  localStorage.removeItem('Access_token')
  localStorage.removeItem('RefreshToken')
  const clearLSEvent = new Event('clearLS')
  LocalStorageEventTarget.dispatchEvent(clearLSEvent)
}
export function getAccessTokenFromLS() {
  return localStorage.getItem('Access_token') || ''
}
export const getProfileFromLS = () => {
  const profile = localStorage.getItem('User')
  return profile ? JSON.parse(profile) : null
}

export const setProfileToLS = (profile: User) => {
  localStorage.setItem('User', JSON.stringify(profile))
}
