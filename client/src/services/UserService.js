import Api from '@/services/Api'

export default {
  addUser (params) {
    return Api().post('addUser', params)
  },

  getUser (params) {
    return Api().get('getUser', params.id)
  }
}
