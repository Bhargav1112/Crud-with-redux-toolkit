import axios from "axios"
import { BASE_URL } from "../baseUrl"

export const sendRequest = (path, method = "GET", data = {}) => {
  const instance = axios.create({
    baseURL: BASE_URL
  })

  return instance.request({
    method,
    url: path,
    headers: {
      "Content-type": "application/json"
    },
    data
  })
}