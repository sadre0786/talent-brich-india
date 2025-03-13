import Navbar from "./components/Navbaar.jsx"
import SocialLink from "./components/SocialLink.jsx"
import { Outlet } from "react-router-dom"


function App() {

  return (
    <>
    <Navbar />
    <SocialLink/>
     <main className="outlet-content">
      <Outlet />
      </main>
    </>
  )
}

export default App
