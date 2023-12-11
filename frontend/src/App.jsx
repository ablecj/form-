// eslint-disable-next-line no-unused-vars
import react from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import FormPage from './pages/FormPage';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<FormPage />} />
      </Routes>
    </div>
  )
}

export default App
