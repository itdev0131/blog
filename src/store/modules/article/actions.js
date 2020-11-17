import { createAction } from 'redux-actions'

export const LIST_ARTICLE = 'LIST_ARTICLE'
export const LIST_ARTICLE_SUCCESS = 'LIST_ARTICLE_SUCCESS'
export const LIST_ARTICLE_FAILURE = 'LIST_ARTICLE_FAILURE'
export const listArticle = createAction(LIST_ARTICLE)
export const listArticleSuccess = createAction(LIST_ARTICLE_SUCCESS)
export const listArticleFailure = createAction(LIST_ARTICLE_FAILURE)

export const ADD_ARTICLE = 'ADD_ARTICLE'
export const ADD_ARTICLE_SUCCESS = 'ADD_ARTICLE_SUCCESS'
export const ADD_ARTICLE_FAILURE = 'ADD_ARTICLE_FAILURE'
export const addArticle = createAction(ADD_ARTICLE)
export const addArticleSuccess = createAction(ADD_ARTICLE_SUCCESS)
export const addArticleFailure = createAction(ADD_ARTICLE_FAILURE)

export const UPDATE_ARTICLE = 'UPDATE_ARTICLE'
export const UPDATE_ARTICLE_SUCCESS = 'UPDATE_ARTICLE_SUCCESS'
export const UPDATE_ARTICLE_FAILURE = 'UPDATE_ARTICLE_FAILURE'
export const updateArticle = createAction(UPDATE_ARTICLE)
export const updateArticleSuccess = createAction(UPDATE_ARTICLE_SUCCESS)
export const updateArticleFailure = createAction(UPDATE_ARTICLE_FAILURE)

export const REMOVE_ARTICLE = 'REMOVE_ARTICLE'
export const REMOVE_ARTICLE_SUCCESS = 'REMOVE_ARTICLE_SUCCESS'
export const REMOVE_ARTICLE_FAILURE = 'REMOVE_ARTICLE_FAILURE'
export const removeArticle = createAction(REMOVE_ARTICLE)
export const removeArticleSuccess = createAction(REMOVE_ARTICLE_SUCCESS)
export const removeArticleFailure = createAction(REMOVE_ARTICLE_FAILURE)
