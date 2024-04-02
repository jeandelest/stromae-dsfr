import axios, { type AxiosRequestConfig } from 'axios'
import { prOidc } from 'oidc'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

const getAccessToken = async () => {
  const oidc = await prOidc

  if (!oidc.isUserLoggedIn) return undefined

  return oidc.getTokens().accessToken
}

const onRequest = async (config: any) => ({
  ...config,
  headers: {
    ...config.headers,
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json;charset=utf-8',
    ...(await (async () => {
      // TODO : Remove this when oidc is in place
      return undefined
      const accessToken = await getAccessToken()

      if (!accessToken) {
        return undefined
      }

      return {
        Authorization: `Bearer ${accessToken}`,
      }
    })()),
  },
})

axiosInstance.interceptors.request.use(onRequest)

// add a second `options` argument here if you want to pass extra options to each generated query
export const stromaeInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  return axiosInstance({
    ...config,
    ...options,
  }).then(({ data }) => data)
}
