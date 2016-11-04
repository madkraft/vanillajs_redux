import Store from './app.store'
import { categories, initialCategories, categoriesActions } from './categories/categories.state'
import categoriesView from './categories/categories'

const store = new Store(categories, initialCategories)
window.store = store

categoriesView(store, categoriesActions)
