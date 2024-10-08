import React from 'react'
import { useState } from 'react'; 
// CSS
import './../App.css'

function List() {

  // 중괄호 문법 : 데이터 바인딩 (데이터 주입) / 서버에서 데이터 가져오기 
  let post = '오늘의 우동'; 

  // style={}
  // style={ {color: 'red', fontSize: '16px'} }

  // state : 변수는 변경되면 html에 자동으로 반영이 안되는데 
  // state는 자동 재렌더링되기 때문에 변동 시 자동으로 html에 반영되게 사용 
  let [title, setTitle] = useState(['10월 1일', '10월 2일', '10월 3일']); 
  // setTitle : state 변경 도와주는 함수 
  // destructing 문법 : let [a, c] = [1, 2]; (대칭으로 값을 넣어주는)

  // 좋아요 숫자 state
  let [like, setLike] = useState(0); 

  return (
    <div className="list">
        <div className='log-title'>
            <span>{title[0]}</span>
            <span className='like-button' onClick={() => { setLike(like + 1) }}>👍 {like}</span> 
        </div>
        <div>{post}</div>
      </div>
  )
}

export default List