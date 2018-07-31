import store from '../store'

export default () => {
  console.log(store)
  mp.trigger('updatePed', JSON.stringify(store.state.character))
}
