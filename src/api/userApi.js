import axios from 'axios'

const getUserLIst = (params) => {
  return axios.get('/api/hero', {params: params}).then((res) => {
    return res.data
  }).catch(err => {
    console.error(err)
    return err
  })
}

export {getUserLIst}
