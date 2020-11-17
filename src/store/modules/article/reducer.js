import { handleActions } from 'redux-actions'
import update from 'immutability-helper'

import * as actions from './actions'

const initialState = {
  articles: {
    loading: false,
    keyword: '',
    data: null,
    error: null,
  },

  article: {
    loading: false,
    data: null,
    error: null,
  },
}

export const reducer = handleActions(
  {
    [actions.LIST_ARTICLE]: (state, action) => {
      // console.log(actions.LIST_ARTICLE, action)
      return {
        articles: {
          ...state.articles,
          keyword: action.payload || '',
          loading: true,
          error: null,
        },
      }
    },
    [actions.LIST_ARTICLE_SUCCESS]: (state, action) => ({
      articles: {
        ...state.articles,
        loading: false,
        data: action.payload,
        error: null,
      },
    }),
    [actions.LIST_ARTICLE_FAILURE]: (state, action) => ({
      articles: {
        ...state.articles,
        loading: false,
        error: action.payload,
      },
    }),

    [actions.ADD_ARTICLE]: (state, action) => {
      // console.log(actions.ADD_ARTICLE, action)
      return update(state, {
        article: { $set: { loading: true, data: action.payload, error: null } },
      })
    },
    [actions.ADD_ARTICLE_SUCCESS]: (state, action) =>
      update(state, {
        articles: { data: { $splice: [[0, 0, action.payload]] } },
        article: { $merge: { loading: false, data: null } },
      }),
    [actions.ADD_ARTICLE_FAILURE]: (state, action) =>
      update(state, {
        article: { $merge: { loading: false, error: action.payload } },
      }),

    [actions.REMOVE_ARTICLE]: (state, action) => {
      // console.log(actions.REMOVE_ARTICLE, action)
      return update(state, {
        articles: {
          $merge: { loading: true, error: null },
        },
      })
    },
    [actions.REMOVE_ARTICLE_SUCCESS]: (state, action) => {
      // console.log('reducer/REMOVE_ARTICLE_SUCCESS', action)
      const index = state.articles.data.data.findIndex(
        (item) => item.id == action.payload
      )
      if (index < 0) {
        return state
      } else {
        return update(state, {
          articles: { data: { data: { $splice: [[index, 1]] } } },
        })
      }
    },
    [actions.REMOVE_ARTICLE_FAILURE]: (state, action) =>
      update(state, {
        article: { $merge: { loading: false, error: action.payload } },
      }),
  },
  initialState
)
