import { useState } from 'react'; 
//CSS
import './App.css';

function App() {

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

  // const likeHandle = () => {}; 
  // onClick={} : 안에 함수 넣어야 함 
  function changeTitle() {
    let copy = [...title]; 
        copy[0] = '9월 9일';
        setTitle(copy); 
  }
  
  return (
    <div>
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      <button onClick={changeTitle}>글 바꾸기</button>
      <div className="list">
        <h5>{title[0]} <span onClick={() => { setLike(like + 1) }}>👍</span>{like}</h5>
        <div>{post}</div>
      </div>
    </div>
  );
}


// node_modules 폴더 : 라이브러리 코드 보관 폴더 
// public 폴더 : static 파일 보관 폴더 
// src 폴더 : 소스코드 보관함 
// package.json 파일 : 프로젝트 정보 (자동생성됨)

// 메인 페이지 : App.js

// /* eslint-disable */ : lint 끄는 기능 

export default App;
