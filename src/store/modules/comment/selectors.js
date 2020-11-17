import { get } from 'lodash'

export const selectArticle = (state) => get(state, 'comment.article')
export const selectComments = (state) => get(state, 'comment.comments')
