
import './App.css'
import NavBar from './components/nav-bar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
