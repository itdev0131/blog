import { createAction } from 'redux-actions'

export const GET_ARTICLE = 'GET_ARTICLE'
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS'
export const GET_ARTICLE_FAILURE = 'GET_ARTICLE_FAILURE'
export const getArticle = createAction(GET_ARTICLE)
export const getArticleSuccess = createAction(GET_ARTICLE_SUCCESS)
export const getArticleFailure = createAction(GET_ARTICLE_FAILURE)

export const LIST_COMMENT = 'LIST_COMMENT'
export const LIST_COMMENT_SUCCESS = 'LIST_COMMENT_SUCCESS'
export const LIST_COMMENT_FAILURE = 'LIST_COMMENT_FAILURE'
export const listComment = createAction(LIST_COMMENT)
export const listCommentSuccess = createAction(LIST_COMMENT_SUCCESS)
export const listCommentFailure = createAction(LIST_COMMENT_FAILURE)

export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'
export const addComment = createAction(ADD_COMMENT)
export const addCommentSuccess = createAction(ADD_COMMENT_SUCCESS)
export const addCommentFailure = createAction(ADD_COMMENT_FAILURE)

export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS'
export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE'
export const updateComment = createAction(UPDATE_COMMENT)
export const updateCommentSuccess = createAction(UPDATE_COMMENT_SUCCESS)
export const updateCommentFailure = createAction(UPDATE_COMMENT_FAILURE)

export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS'
export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE'
export const removeComment = createAction(REMOVE_COMMENT)
export const removeCommentSuccess = createAction(REMOVE_COMMENT_SUCCESS)
export const removeCommentFailure = createAction(REMOVE_COMMENT_FAILURE)
