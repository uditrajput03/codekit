import { useState , lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Explore from './pages/Explore'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
function App() {
  const [login , setLogin] = useState(false)
  const About = lazy(()=> import("./pages/About"))
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/">
            <Route index element={<Home login={login} setLogin={setLogin} />} />
            <Route path="login" element={<Login login={login} setLogin={setLogin}/>}/>
            <Route path="signup" element={<Signup login={login} setLogin={setLogin}/>}/>
            <Route path="explore" element={<Explore/>}/>
            <Route path="dashboard" element={<Dashboard login={login} setLogin={setLogin}/>}/>
            <Route path="about" element={<Suspense fallback={"Loading..."}> <About /> </Suspense>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <div className='relative'>
    <div className="fixed min-h-screen min-w-max inset-0 -z-10  bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
    <NavBar></NavBar>
    <Hero></Hero>
    <PricingBoard></PricingBoard>
    <ServiceBoard></ServiceBoard>
    <NewsLetter></NewsLetter>
    <Footer></Footer>
    </div> */}
    </>
  )
}

export default App
