import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'

import { selectArticle, getArticle } from 'store/modules/comment'
import CommentList from 'containers/CommentList'

import styles from './styles.module.scss'

const AritcleShow = (props) => {
  const dispatch = useDispatch()
  const articleDic = useSelector(selectArticle)
  const article = get(articleDic, 'data.data', {})

  // console.log('ArticleShow', props.match.params.id, articleDic)

  useEffect(() => {
    // console.log('ArticleShow/useEffect')
    dispatch(getArticle(props.match.params.id))
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles['page__title']}>Article</div>
      <divc className={styles['page__content']}>
        <div className={styles.article}>
          <div className={styles['article__title']}>{article.title}</div>
          <div className={styles['article__body']}>{article.body}</div>
          <div className={styles['article__comments']}>
            <CommentList articleId={props.match.params.id} />
          </div>
        </div>
      </divc>
    </div>
  )
}

export default AritcleShow
