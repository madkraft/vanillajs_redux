import yo from 'yo-yo'
import AddCategory from './add-categories'
import {category} from './categories.state'

export default function Categories (store, categoriesActions) {
  let actions = categoriesActions()
  let categories = []
  let unsub = store.subscribe(() => {
    categories = store.getState()
    render({
      data: categories,
      update: true,
      oldElement: initialElement
    })
  })

  let initialElement = render({
    data: categories,
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
      {id: 0, name: 'Hello'},
      {id: 1, name: 'World'}
    ]

    store.dispatch(actions.getCategories(payload))
  }, 4000)


  function onClick (item, event) {
    let currentCategory = category(currentCategory, actions.selectCategory(item))
    console.log(currentCategory)

    store.dispatch(actions.selectCategory([item]))
  }


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
            ${items.map(item => yo `
              <li onclick=${onClick.bind(null, item)}>${item.name}</li>
            `)}
          </ul>
        </div>
      `
    }
  }
  AddCategory(store, categoriesActions)



}


