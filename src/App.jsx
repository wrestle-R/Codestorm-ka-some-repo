import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing1 from './pages/Landing1'
import Landing2 from './pages/Landing2'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing2 />} />
        <Route path="*" element={<Landing2 />} />
        <Route path="/landing2" element={<Landing2 />} />

      </Routes>
    </div>
  )
}

export default App