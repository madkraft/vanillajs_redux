export default function AppStore(reducer, initialState) {
  let state = initialState
  let listeners = []

  const getState = () => {
    return state
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = (subListener) => {
    listeners = [].concat(listeners, subListener)

    return function () {
      listeners = listeners.filter(listener => listener !== subListener)
    }
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}