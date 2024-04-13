import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Profile from './Pages/Profile'
import Signup from "./Pages/Signup"
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-out" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
