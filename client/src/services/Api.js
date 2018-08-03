import axios from 'axios'

export default() => {
  return axios.create({
    // for debugging on local machine (change do deployment url)
    baseURL: 'https://localhost:8443'
  })
}
