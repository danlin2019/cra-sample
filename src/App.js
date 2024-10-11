import { useEffect, useState } from 'react';
import axios from 'axios';
//外部套件會放上面

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss';


function App() {
  const [text, setText] =useState('');

  const onChangeHandler = (e) =>{
    setText(e.target.value)
  }

  useEffect(()=>{
    (async()=>{
    // 取得.env 環境變數 使用 process.env
    const path = process.env.REACT_APP_PATH
     const result = await axios.get(path)
     console.log(result)
    })()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         <button type="button" className="btn btn-primary">Primary</button>
        </a>
        <Input id="sampleText" text="這是一個input" value={text} onChangeHandler={onChangeHandler}></Input>
        {text}
      </header>
    </div>
  );
}

export default App;