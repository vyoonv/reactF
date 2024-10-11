import React from 'react'
import Comment from './Comment'

const comments = [
    {
        name: "이이름", 
        comment: "안녕하세요, 이이름입니다."
    },
    {
        name: "김이름", 
        comment: "안녕하세요, 김이름입니다."
    },
    {
        name: "박이름", 
        comment: "안녕하세요, 박이름입니다."
    }
]

function CommentList(props) {
  return (
    <div>
        {comments.map( (comment) => {
            return (
                <Comment name={comment.name} comment={comment.comment} />
            )
        })}
    </div>
  )
}

export default CommentList