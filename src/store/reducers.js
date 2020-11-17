import { combineReducers } from 'redux'
import { reducer as articleReducer } from './modules/article'
import { reducer as commentReducer } from './modules/comment'

const reducer = combineReducers({
  article: articleReducer,
  comment: commentReducer,
})

export default reducer
