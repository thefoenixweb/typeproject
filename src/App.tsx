
import './App.css'
import { BrowserPage } from './Components/BrowserPage/BrowserPage';
import { Header } from './Components/Header/Header'
import { HomePage } from './Components/HomePage/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Updates } from './Components/updates/updates';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="browse" element={<BrowserPage />} />
    <Route path="updates" element={<Updates/>} />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
