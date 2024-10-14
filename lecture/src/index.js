import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import fruit from './chapter_07/Fruit';

// React18부터 ReactDOM.render()는 사용되지 않고 createRoot를 사용함 
// ReactDOM.createRoot()를 사용
 const rootElement = document.getElementById('root');
 const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CommentList />
    <Fruit />
  </React.StrictMode>
);

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

reportWebVitals();
