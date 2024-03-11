import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { About, Contact, Gallery, GetInvolved, Home, Services } from './pages';
import Layout from './components/Layout';
import Donate from './pages/Donate';


const App = () => {
  return (
    <div className=' bg-slate-100 w-full overflow-hidden'>
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/getinvolved' element={<GetInvolved/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/donate' element= {<Donate/>}/>
          </Route>         
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
