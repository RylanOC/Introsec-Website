import Api from '@/services/Api'

export default {
  fetchWebChallenges () {
    return Api().get('webChallenges')
  },
  fetchShellChallenges () {
    return Api().get('shellChallenges')
  },
  fetchNetworkingChallenges () {
    return Api().get('networkingChallenges')
  },
  fetchCryptoChallenges () {
    return Api().get('cryptoChallenges')
  },
  fetchReverseEngineeringChallenges () {
    return Api().get('reverseEngineeringChallenges')
  },
  fetchPwningChallenges () {
    return Api().get('pwningChallenges')
  },
  fetchReconChallenges () {
    return Api().get('reconChallenges')
  },
  fetchSteganographyChallenges () {
    return Api().get('steganographyChallenges')
  },
  fetchForensicsChallenges () {
    return Api().get('forensicsChallenges')
  },
  fetchCSAWChallenges () {
    return Api().get('CSAWChallenges')
  },
  fetchMiscChallenges () {
    return Api().get('miscChallenges')
  },
  fetchPhysicalChallenges () {
    return Api().get('physicalChallenges')
  },
  verifyFlag (params) {
    return Api().post('check', params)
  }
}

