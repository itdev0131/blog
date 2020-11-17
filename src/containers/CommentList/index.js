import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'
import moment from 'moment'

import { Button, Drawer, Popconfirm } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import {
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
  PlusOutlined,
} from '@ant-design/icons'

import {
  listComment,
  addComment,
  updateComment,
  removeComment,
  selectComments,
} from 'store/modules/comment'

import styles from './styles.module.scss'

const Comment = ({ comment, onEdit }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.box}>
      <div className={styles['box__content']}>
        <p>{comment.body}</p>
        <span>{moment(comment.created_at).format('YYYY-MM-DD HH:mm:ss')}</span>
      </div>
      <div className={styles['box__footer']}>
        <Button
          type="primary"
          icon={<EditOutlined />}
          size="small"
          warning="true"
          className={styles['button']}
          onClick={() => {
            onEdit(comment)
          }}
        />
        &nbsp;&nbsp;
        <Popconfirm
          title="Are you sure delete this comment?"
          onConfirm={() => {
            dispatch(removeComment(comment.id))
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
  )
}

const CommentForm = ({ comment, visible, onClose }) => {
  const dispatch = useDispatch()

  const [formTitle, setFormTitle] = useState('Leave a comment')
  const [body, setBody] = useState('')

  useEffect(() => {
    setFormTitle(comment.id ? 'Update a comment' : 'Leave a comment')
    setBody(comment.body || '')
  }, [comment])

  const onSave = () => {
    // console.log('CommentForm/onSave', comment)
    if (comment.id > 0) {
      dispatch(
        updateComment({
          id: comment.id,
          body,
        })
      )
    } else {
      dispatch(addComment({ body }))
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
      <TextArea
        value={body}
        rows={10}
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

const CommentList = ({ articleId }) => {
  const dispatch = useDispatch()
  const commentsDic = useSelector(selectComments)

  const [visible, setVisible] = useState(false)
  const [comment, setComment] = useState({})

  const comments = get(commentsDic, 'data.data', [])
  // console.log('CommentList', commentsDic)

  const onEdit = (item) => {
    setComment(item)
    setVisible(true)
  }

  useEffect(() => {
    dispatch(listComment(articleId))
  }, [articleId])
  return (
    <div className={styles.container}>
      <div className={styles['container__header']}>
        <div className={styles['container__title']}>Comments</div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="small"
          onClick={() => {
            setComment({})
            setVisible(true)
          }}
        >
          Leave Comment
        </Button>
      </div>

      <div className="comments-list">
        {comments.map((item) => (
          <Comment key={item.id} comment={item} onEdit={onEdit} />
        ))}
      </div>

      <CommentForm
        comment={comment}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
      />
    </div>
  )
}

export default CommentList
