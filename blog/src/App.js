import React from 'react'
import List from './list/List';
//CSS
import './App.css';

function App() {

  // const likeHandle = () => {}; 
  // onClick={} : 안에 함수 넣어야 함 
  // function changeTitle() {
  //  let copy = [...title]; 
  //      copy[0] = '9월 9일';
  //      setTitle(copy); 
  //}

  // <> </>
  
  return (
    <div>
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      {/* <button onClick={changeTitle}>글 바꾸기</button> */}
      {/* 
        컴포넌트화
        1. 반복적인 html 축약할 때 
        2. 큰 페이지들  
        3. 자주 변경되는 것들 (UI)
        -> 모든 걸 컴포넌트화 시키면 state 쓸 때 문제가 생길 수 있어 필요한 경우에 사용 
      */}
      <List />
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
