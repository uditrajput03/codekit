import { useState, lazy, Suspense, useEffect, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
function App() {
  const [login, setLoginState] = useState(false)
  const About = lazy(() => import("./pages/About"))
  const Payment = lazy(() => import("./pages/Payment"))
  const Contact = lazy(() => import('./pages/Contact'))
  const Terms = lazy(() => import('./pages/Terms'))
  const Privacy = lazy(() => import('./pages/Privacy'))
  const Explore = lazy(() => import('./pages/Explore'))


  const setLogin = useCallback((bool) => {
    setLoginState(bool)
  } ,[])
  useEffect(() => {
    // const loginState = localStorage.getItem('loginState')
    // if(loginState == 'true') return
    const token = localStorage.getItem('token')
    if (token != null) {
      fetch(import.meta.env.VITE_BACKEND + "/auth", {
        method: "get",
        headers: {
          authorization: token
        }
      })
        .then(res => res.json())
        .then((res) => {
          if (res.email != null) {
            localStorage.setItem('loginState', true)
            setLogin(true)
          }
          else {
            console.log(res.status);
          }
        })
        .catch(() => {
          alert("Something went wrong try again later")
        })
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/">
            <Route index element={<Home login={login} setLogin={setLogin} />} />
            <Route path="login" element={<Login login={login} setLogin={setLogin} />} />
            <Route path="signup" element={<Signup login={login} setLogin={setLogin} />} />
            <Route path="dashboard" element={<Dashboard login={login} setLogin={setLogin} />} />
            <Route path="explore" element={<Suspense fallback={"Loading..."}> <Explore /> </Suspense>} />
            <Route path="about" element={<Suspense fallback={"Loading..."}> <About /> </Suspense>} />
            <Route path="payment" element={<Suspense fallback={"Loading..."}> <Payment login={login} setLogin={setLogin}/> </Suspense>} />
            <Route path="contact" element={<Suspense fallback={"Loading..."}> <Contact login={login}/> </Suspense>} />
            <Route path="terms" element={<Suspense fallback={"Loading..."}> <Terms login={login}/> </Suspense>} />
            <Route path="privacy" element={<Suspense fallback={"Loading..."}> <Privacy login={login}/> </Suspense>} />
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
