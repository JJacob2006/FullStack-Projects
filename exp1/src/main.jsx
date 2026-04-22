import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Form.css'
import StudentForm from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentForm />
  </StrictMode>,
)
