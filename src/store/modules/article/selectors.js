import { get } from 'lodash'

export const selectArticles = (state) => get(state, 'article.articles')
