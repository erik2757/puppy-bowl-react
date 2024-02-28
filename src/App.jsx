import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NavBar from './components/NavBar'
import './index.css'
import NewPlayerForm from './components/NewPlayerForm'
import Players from './components/Players'

function App() {
  

  return (
    <>
    <header> 
      <NavBar/>
   </header>
    <main> 
      
     
    <Routes> 
      
      <Route path='/' element={<AllPlayers/>}/> 
      <Route path='/players/:id' element={<SinglePlayer />}/>
      <Route path='/newplayer' element={<NewPlayerForm/>}/> 

    </Routes>
    </main>
    <footer> 
      <NavBar/>
    </footer>

    </>
  )
}

export default App
