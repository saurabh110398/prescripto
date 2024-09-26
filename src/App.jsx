
import { Route, Routes } from "react-router-dom"
import { assets } from "./assets/assets"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Doctors from "./pages/Doctors"
import Login from "./pages/Login"
import MyProfile from "./pages/MyProfile"
import MyAppointments from "./pages/MyAppointments"
import Appointment from "./pages/Appointment"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
// import './index.css'
import './index.css';
function App() {


  return (
    <div className="px-10">
      <Navbar/>
      

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/doctors/:speciality" element={<Doctors />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/my-Appointments" element={<MyAppointments />}></Route>
        <Route path="/appointment/:docId" element={<Appointment />}></Route>
        <Route path="/myProfile" element={<MyProfile />}>Dr</Route>
      </Routes>
    </div>
  )
}

export default App
