import React from 'react'
import ReactDOM from 'react-dom/client'

const isUser = true;
const name = "Léa";

function MyButton() {
  return (
    isUser ? <button className={name}>I'm a button</button> : <button>I am not a button</button>
  )
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
)
