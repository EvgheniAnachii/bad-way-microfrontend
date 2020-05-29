import { OAUTH } from '../constants'

const {
  TENANT, CLIENT_ID, SCOPE, RESOURCE
} = OAUTH

export const buildAuthorizeUrl = (): string => `https://login.microsoftonline.com/${TENANT}/oauth2/authorize?response_type=token&client_id=${CLIENT_ID}&scope=${SCOPE}&resource=${RESOURCE}&redirect_uri=${window.location.origin}/home`

export const buildLogoutUrl = (): string => `https://login.microsoftonline.com/common/oauth2/logout?
post_logout_redirect_uri=${window.location.origin}`

export const extractParamsFromUrl = () => {
  const url = new URL(`http://dymmy.com?${window.location.hash.substring(1)}`)
  const token = url.searchParams.get('access_token')
  const error = url.searchParams.get('error')
  const errorDescription = url.searchParams.get('error_description')

  return {
    token,
    error,
    errorDescription
  }
}
