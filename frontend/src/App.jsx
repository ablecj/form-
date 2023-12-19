// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import FormPage from './pages/FormPage';

import ListUser from './pages/ListUser';
import EditUser from './pages/EditUser';
import DeleteUser from './pages/DeleteUser';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<FormPage />} />
        <Route path="/user" element={<ListUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="/user/delete/:id" element={<DeleteUser />} />
      </Routes>
    </div>
  )
}

export default App
