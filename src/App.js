import React, { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    document.title = `Clicked ${count} times.`
  })

  return (
    <div>
      <p>นายคลิกไป {count} ครั้งแล้วนะ</p>
      <button
        style={{
          padding: '8px 16px',
          borderRadius: 4,
          fontSize: '1.25rem'
        }} 
        onClick={() => setCount(count + 1)}
        >
        Click Please!!
        </button>
    </div>
  )
}

export default App;
