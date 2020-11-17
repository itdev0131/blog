import { all } from 'redux-saga/effects'
import { saga as articleSaga } from './modules/article'
import { saga as commentSaga } from './modules/comment'

export default function* rootSaga() {
  yield all([articleSaga(), commentSaga()])
}
