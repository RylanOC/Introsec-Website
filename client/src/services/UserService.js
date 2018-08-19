import Api from '@/services/Api'

export default {
  addUser (params) {
    return Api().post('addUser', params)
  },

  getUser (params) {
    return Api().get('getUser/' + params.sub)
  },

  async getSolved (params) {
    return Api().get('getSolved/' + params.user_id)
  },

  getUsers (params) {
    return Api().get('getUsers/')
  }
}
