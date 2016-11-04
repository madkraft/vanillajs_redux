export const initialCategories = [
  {id: 0, name: 'Polar'},
  {id: 1, name: 'Brown'},
  {id: 2, name: 'Grizzly'}
]

export const categories = (state, args) => {
  if (!state) {
    state = initialCategories
  }

  switch (args.type) {
    case 'GET_CATEGORIES':
      return args.payload || state
    default:
      return state
  }
}


export const category = (state, args) => {
  if (!state) {
    state = {}
  }

  switch (args.type) {
    case 'GET_CURRENT_CATEGORY':
      return args.payload || state
    default:
      return state
  }
}


export const categoriesActions = () => {
  const getCategories = (categories) => {
    return { type: 'GET_CATEGORIES', payload: categories }
  }

  const selectCategory = (category) => {
    return { type: 'GET_CURRENT_CATEGORY', payload: category }
  }

  return {
    getCategories,
    selectCategory
  }
}