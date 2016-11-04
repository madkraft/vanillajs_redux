import yo from 'yo-yo'

export default function Categories (store, categoriesActions) {
  let actions = categoriesActions()
  let bears = []
  let unsub = store.subscribe(() => {
    bears = store.getState()
    render({
      data: bears,
      update: true,
      oldElement: initialElement
    })
  })

  let initialElement = render({
    data: bears,
    update: false,
    oldElement: ''
  })

  document.body.appendChild(initialElement)

  store.dispatch(actions.getCategories())

  let timeout1 = setTimeout(() => {
    let payload = [
      {id: 0, name: 'Redux'},
      {id: 2, name: 'yo-yo'}
    ]

    store.dispatch(actions.getCategories(payload))
    // unsub()
  }, 2000)

  let timeout2 = setTimeout(() => {
    let payload = [
      {id: 0, name: 'Hello'}
    ]

    store.dispatch(actions.getCategories(payload))
  }, 4000)


  function render (args) {
    if (args.update) {
      yo.update(args.oldElement, renderNew(args.data))
    } else {
      return renderNew(args.data)
    }

    function renderNew (items) {
      return yo `
        <div>
          <ul>
            ${items.map(item => yo `<li>${item.name}</li>`)}
          </ul>
        </div>
      `
    }
  }


  // <button onclick=${onClick}>Add bear</button>

}


