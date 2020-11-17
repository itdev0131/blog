import { handleActions } from 'redux-actions'
import update from 'immutability-helper'

import * as actions from './actions'

const initialState = {
  article: {
    loading: false,
    data: null,
    error: null,
  },

  comments: {
    loading: false,
    data: null,
    error: null,
  },

  comment: {
    loading: false,
    data: null,
    error: null,
  },
}

export const reducer = handleActions(
  {
    [actions.GET_ARTICLE]: (state, action) => {
      // console.log(actions.GET_ARTICLE, action)
      return update(state, {
        article: { $set: { loading: true, data: null, error: null } },
      })
    },
    [actions.GET_ARTICLE_SUCCESS]: (state, action) =>
      update(state, {
        article: { $merge: { loading: false, data: action.payload } },
      }),
    [actions.GET_ARTICLE_FAILURE]: (state, action) =>
      update(state, {
        article: { $merge: { loading: false, error: action.payload } },
      }),

    [actions.LIST_COMMENT]: (state, action) => {
      // console.log(actions.LIST_COMMENT, action)
      return update(state, {
        comments: {
          $set: {
            loading: true,
            error: null,
          },
        },
      })
    },
    [actions.LIST_COMMENT_SUCCESS]: (state, action) =>
      update(state, {
        comments: {
          $merge: {
            loading: false,
            data: action.payload,
            error: null,
          },
        },
      }),
    [actions.LIST_COMMENT_FAILURE]: (state, action) =>
      update(state, {
        comments: {
          $merge: {
            loading: false,
            error: action.payload,
          },
        },
      }),

    [actions.ADD_COMMENT]: (state, action) => {
      // console.log(actions.ADD_COMMENT, action)
      return update(state, {
        comment: { $set: { loading: true, data: action.payload, error: null } },
      })
    },
    [actions.ADD_COMMENT_SUCCESS]: (state, action) =>
      update(state, {
        comments: { data: { $splice: [[0, 0, action.payload]] } },
        comment: { $merge: { loading: false, data: null } },
      }),
    [actions.ADD_COMMENT_FAILURE]: (state, action) =>
      update(state, {
        comment: { $merge: { loading: false, error: action.payload } },
      }),

    [actions.REMOVE_COMMENT]: (state, action) => {
      // console.log(actions.REMOVE_COMMENT, action)
      return update(state, {
        comments: {
          $merge: { loading: true, error: null },
        },
      })
    },
    [actions.REMOVE_COMMENT_SUCCESS]: (state, action) => {
      // console.log('reducer/REMOVE_COMMENT_SUCCESS', action)
      const index = state.comments.data.data.findIndex(
        (item) => item.id == action.payload
      )
      if (index < 0) {
        return state
      } else {
        return update(state, {
          comments: { data: { data: { $splice: [[index, 1]] } } },
        })
      }
    },
    [actions.REMOVE_COMMENT_FAILURE]: (state, action) =>
      update(state, {
        comment: { $merge: { loading: false, error: action.payload } },
      }),
  },
  initialState
)
