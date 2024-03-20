import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Empolyee from './Empolyee';
import AddData from './AddData';
import Update from './Update';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Empolyee />} />
        <Route path='/AddData' element={<AddData />} />
        <Route path='/Update/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App