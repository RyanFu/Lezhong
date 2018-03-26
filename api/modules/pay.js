import service from '../service'

export default {
  getPay () {
    return service.get('https://facebook.github.io/react-native/movies.json')
  }
}
