import * as React from 'react'

import { buildAuthorizeUrl, /*buildLogoutUrl*/ } from './utils/oauth'
import { authService } from './AuthService'

interface Props {
  onUserAuthorized: (isAuth: boolean) => void
}

const handleAuthClick = () => window.location.href = buildAuthorizeUrl()

export const Authorization = (props: Props) => {
  return <>
    <button onClick={handleAuthClick}>Authorize please</button>
  </>
}

const handleLogoutClick = () => {
  authService.removeAuthToken()
  window.location.href = window.location.origin
}

// const handleLogoutClick = () => window.location.href = buildLogoutUrl()

export const Logout = (props: Props) => {
  return <>
    <button onClick={handleLogoutClick}>Logout</button>
  </>
}