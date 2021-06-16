import React from 'react';
import './App.css';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadlines from './components/TopHeadlines/TopHeadlines';


function App() {
  return (
    <div>
      <Header></Header>
      <TopHeadlines></TopHeadlines>
    </div>
  );
}

export default App;
