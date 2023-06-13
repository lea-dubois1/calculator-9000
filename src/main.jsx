import React from 'react'
import ReactDOM from 'react-dom/client'

export default function MyApp() {
  return (
    <div>
      <h1>Calculator9000</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
)
