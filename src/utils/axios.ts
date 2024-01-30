import axios from 'axios'

export function axiosGet<T>(url: string) {
  return axios.get<T>(url).then(({ data }) => data)
}
