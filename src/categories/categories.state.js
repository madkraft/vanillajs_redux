export const initialCategories = [
  {id: 0, name: 'Polar'},
  {id: 1, name: 'Brown'},
  {id: 2, name: 'Grizzly'}
]

/////////////////////////////////////
///// REDUCERS
//////////////////////////////////////

export const categories = (state, action) => {
  if (!state) {
    state = initialCategories
  }

  switch (action.type) {
    case 'GET_CATEGORIES':
      return action.payload || state
    case 'ADD_CATEGORY':
      return action.payload || state
    default:
      return state
  }
}


export const category = (state, action) => {
  if (!state) {
    state = {}
  }

  switch (action.type) {
    case 'GET_CURRENT_CATEGORY':
      return action.payload || state
    default:
      return state
  }
}


////////////////////////////
///// Actions
//////////////////////////

export const categoriesActions = () => {
  const getCategories = (categories) => {
    return { type: 'GET_CATEGORIES', payload: categories }
  }

  const selectCategory = (category) => {
    return { type: 'GET_CURRENT_CATEGORY', payload: category }
  }

  const addCategory = (category) => {
    return { type: 'ADD_CATEGORY', payload: category }
  }

  return {
    getCategories,
    selectCategory,
    addCategory
  }
}

export function reduceReducers(...reducers) {
  return (previous, current) =>
    reducers.reduce(
      (p, r) => r(p, current),
      previous
    );
}