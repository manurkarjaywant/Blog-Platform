import React, { useState } from 'react'
import {BrowserRouter, Routes, Route } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route>users</Route>
            <Route></Route>
            <Route></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
