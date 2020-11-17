import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Button,
  Drawer,
  Input,
  Pagination,
  Popconfirm,
  // Space,
  // message,
} from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  SaveOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import {
  listArticle,
  removeArticle,
  addArticle,
  updateArticle,
  selectArticles,
} from 'store/modules/article'

import styles from './styles.module.scss'

const Article = ({ article, onEdit }) => {
  const dispatch = useDispatch()
  return (
    <div className={styles['box-wrapper']}>
      <div className={styles.box}>
        <div className={styles['box__header']}>
          <div className={styles['box__title']}>{article.title}</div>
        </div>
        <div className={styles['box__content']}>{article.body}</div>
        <div className={styles['box__footer']}>
          <div>
            <Link to={`/articles/${article.id}`}>
              <Button
                type="default"
                icon={<EyeOutlined />}
                size="small"
                className={styles['button']}
              />
            </Link>
            <Button
              type="primary"
              icon={<EditOutlined />}
              size="small"
              warning="true"
              className={styles['button']}
              onClick={() => {
                onEdit(article)
              }}
            />
            <Popconfirm
              title="Are you sure delete this article?"
              onConfirm={() => {
                dispatch(removeArticle(article.id))
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="primary"
                icon={<DeleteOutlined />}
                size="small"
                danger="true"
                className={styles['button']}
              />
            </Popconfirm>
          </div>
        </div>
      </div>
    </div>
  )
}

const ArticleForm = ({ article, visible, onClose }) => {
  const dispatch = useDispatch()

  const [formTitle, setFormTitle] = useState('Create an article')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    setFormTitle(article.id ? 'Update an article' : 'Create an article')
    setTitle(article.title || '')
    setBody(article.body || '')
  }, [article])

  const onSave = () => {
    // console.log('ArticleForm/onSave', article)
    if (article.id > 0) {
      dispatch(
        updateArticle({
          id: article.id,
          title,
          body,
        })
      )
    } else {
      dispatch(
        addArticle({
          title,
          body,
        })
      )
    }
  }

  return (
    <Drawer
      title={formTitle}
      width={400}
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <Input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <br />
      <br />
      <TextArea
        value={body}
        rows={5}
        onChange={(e) => {
          setBody(e.target.value)
        }}
      />
      <br />
      <br />
      <Button type="primary" icon={<SaveOutlined />} onClick={() => onSave()}>
        Save
      </Button>
    </Drawer>
  )
}

const { Search } = Input

const ArticleList = () => {
  const dispatch = useDispatch()
  const articles = useSelector(selectArticles)

  const [visible, setVisible] = useState(false)
  const [article, setArticle] = useState({})
  // console.log('articles', articles)

  const onEdit = (item) => {
    setArticle(item)
    setVisible(true)
  }

  const onSearch = (value) => {
    if (value !== articles.keyword) dispatch(listArticle(value))
  }

  useEffect(() => {
    dispatch(listArticle())
  }, [])

  if (!articles.data) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles['container__header']}>
        <div className={styles['container__title']}>Articles</div>
        <div className={styles['filter-wrapper']}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="default"
            className={styles['button-add']}
            onClick={() => {
              setArticle({})
              setVisible(true)
            }}
          >
            Add
          </Button>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            className={styles.filter}
          />
        </div>
      </div>

      <div className={`articles-list ${styles['container__content']}`}>
        {articles.data.data.map((item) => (
          <Article key={item.id} article={item} onEdit={onEdit} />
        ))}
      </div>

      {articles.data.pagy.count > 0 && (
        <div className={styles['pg-wrapper']}>
          <Pagination
            showSizeChanger={false}
            total={articles.data.pagy.count}
            defaultPageSize={20}
            defaultCurrent={1}
          />
        </div>
      )}

      <ArticleForm
        visible={visible}
        article={article}
        onClose={() => {
          setVisible(false)
        }}
      />
    </div>
  )
}

export default ArticleList
