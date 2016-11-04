import yo from 'yo-yo'

export default function AddCategories (store, categoriesActions) {
  let actions = categoriesActions()

  function onClick () {
    let payload = {id: 1, name: 'New Category'}

    let state = store.getState()
    let newState = [ ...state, payload]
    store.dispatch(actions.addCategory(newState))
  }


  function render () {
    return yo `
      <div>
        <button onclick=${onClick}>Add category</button>
      </div>
    `
  }

  let initialElement = render()
  document.body.appendChild(initialElement)
}


