import axios from 'axios'

// Global axios defaults
axios.defaults.timeout = 10000

function transformResponse (response) {
  return Promise.all([response.status, response.statusText, response.data])
}

function validateStatus ([status, statusText, data]) {
  if (status >= 200 && status < 300) {
    return data
  } else {
    let error = new Error(statusText)
    error.status = status
    error.error_message = data
    return Promise.reject(error)
  }
}

function handleError (error) {
  console.log(error)
}

export default {
  get (url, params = {}) {
    return axios
      .get(url, {params})
      .then(transformResponse)
      .then(validateStatus)
      .catch(error => handleError(error))
  },
  post (url, params = {}) {
    return axios
      .post(url, {...params})
      .then(transformResponse)
      .then(validateStatus)
      .catch(error => handleError(error))
  }
}
