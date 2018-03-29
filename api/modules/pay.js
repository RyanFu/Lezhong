import service from '../service'

export default {
  getPay (payload) {
    return service.post('http://wengyukunmm.6655.la/orders', payload)
  }
}
