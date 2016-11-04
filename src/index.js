import Store from './app.store'
import { categories, category, initialCategories, categoriesActions, reduceReducers } from './categories/categories.state'
import categoriesView from './categories/categories'


const rootReducer = reduceReducers(categories, category)

const store = new Store(rootReducer, initialCategories)
window.state = store.getState

categoriesView(store, categoriesActions)
