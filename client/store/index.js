import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state () {
      return {
        title: 'store title',
        wine_attributes: [],
        result: {
          value: 0,
          comment: 'store comment'
        }
      }
    }
  })
}

export default createStore
