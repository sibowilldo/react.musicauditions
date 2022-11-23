import { useState } from 'react'
import Layout  from "./layouts/Main/AppLayout.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Layout>
        <div className="App">
          My App
        </div>
      </Layout>
  )
}

export default App
