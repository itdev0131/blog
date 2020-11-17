import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { isEmpty } from 'lodash'

import * as actions from './actions'

function* getArticle({ payload }) {
  try {
    // console.log('saga/getArticle', payload)
    const res = yield call(axios.get, `/articles/${payload}`)
    yield put(actions.getArticleSuccess(res.data))
  } catch (error) {
    yield put(actions.getArticleFailure(error))
  }
}

function* listComment({ payload }) {
  try {
    // console.log('saga/listComment', payload)
    let res
    if (isEmpty(payload)) {
      res = yield call(axios.get, '/comments')
    } else {
      res = yield call(axios.get, '/comments', {
        params: { article_id: payload },
      })
    }

    yield put(actions.listCommentSuccess(res.data))
  } catch (error) {
    yield put(actions.listCommentFailure(error))
  }
}

function* addComment({ payload }) {
  try {
    // console.log('saga/addComment', payload)
    const res = yield call(axios.post, '/comments', payload)
    yield put(actions.addCommentSuccess(res.data))
  } catch (error) {
    yield put(actions.addCommentFailure(error))
  }
}

function* updateComment({ payload }) {
  try {
    // console.log('saga/updateComment', payload)
    const res = yield call(axios.put, '/comments', payload)
    yield put(actions.updateCommentSuccess(res.data))
  } catch (error) {
    yield put(actions.updateCommentFailure(error))
  }
}

function* removeComment({ payload }) {
  try {
    // console.log('saga/removeComment', payload)
    // const res = yield call(axios.delete, `/comments/${payload}`)
    yield put(actions.removeCommentSuccess(payload))
  } catch (error) {
    yield put(actions.removeCommentFailure(error))
  }
}

export const saga = function* () {
  yield takeLatest(actions.GET_ARTICLE, getArticle)
  yield takeLatest(actions.LIST_COMMENT, listComment)
  yield takeLatest(actions.ADD_COMMENT, addComment)
  yield takeLatest(actions.UPDATE_COMMENT, updateComment)
  yield takeLatest(actions.REMOVE_COMMENT, removeComment)
}
