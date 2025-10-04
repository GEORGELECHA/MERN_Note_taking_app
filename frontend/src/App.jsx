import React from 'react'
import { Routes, Route } from 'react-router'
import CreatePage from './pages/CreatePage'
import Homepage from './pages/Homepage'
import NotesDetailPage from './pages/NotesDetailPage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
  <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
  
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/note/:id" element={<NotesDetailPage/>} />
      </Routes>

    </div>
  )
}

export default App

