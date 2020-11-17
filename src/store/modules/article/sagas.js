import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { isEmpty } from 'lodash'

import * as actions from './actions'

function* listArticle({ payload }) {
  try {
    // console.log('saga/listArticle', payload)
    let res
    if (isEmpty(payload)) {
      res = yield call(axios.get, '/articles')
    } else {
      res = yield call(axios.get, '/articles', { params: { search: payload } })
    }

    yield put(actions.listArticleSuccess(res.data))
  } catch (error) {
    yield put(actions.listArticleFailure(error))
  }
}

function* addArticle({ payload }) {
  try {
    // console.log('saga/addArticle', payload)
    const res = yield call(axios.post, '/articles', payload)
    yield put(actions.addArticleSuccess(res.data))
  } catch (error) {
    yield put(actions.addArticleFailure(error))
  }
}

function* updateArticle({ payload }) {
  try {
    // console.log('saga/updateArticle', payload)
    const res = yield call(axios.put, '/articles', payload)
    yield put(actions.updateArticleSuccess(res.data))
  } catch (error) {
    yield put(actions.updateArticleFailure(error))
  }
}

function* removeArticle({ payload }) {
  try {
    // console.log('saga/removeArticle', payload)
    // const res = yield call(axios.delete, `/articles/${payload}`)
    yield put(actions.removeArticleSuccess(payload))
  } catch (error) {
    yield put(actions.removeArticleFailure(error))
  }
}

export const saga = function* () {
  yield takeLatest(actions.LIST_ARTICLE, listArticle)
  yield takeLatest(actions.ADD_ARTICLE, addArticle)
  yield takeLatest(actions.UPDATE_ARTICLE, updateArticle)
  yield takeLatest(actions.REMOVE_ARTICLE, removeArticle)
}
