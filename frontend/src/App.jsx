import { useState, lazy, Suspense, useEffect, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import Spinner from './components/Spinner'
function App() {
  const [login, setLoginState] = useState(false)
  const About = lazy(() => import("./pages/About"))
  const Payment = lazy(() => import("./pages/Payment"))
  const Contact = lazy(() => import('./pages/Contact'))
  const Terms = lazy(() => import('./pages/Terms'))
  const Privacy = lazy(() => import('./pages/Privacy'))
  const Refund = lazy(() => import('./pages/Refund'))
  const Explore = lazy(() => import('./pages/Explore'))
  const Forget = lazy(() => import('./pages/Forget'))
  const ChangePassword = lazy(() => import('./pages/ChangePassword'))


  const setLogin = useCallback((bool) => {
    setLoginState(bool)
  } ,[])
  useEffect(() => {
    const loginState = localStorage.getItem('loginState')
    if(loginState == 'true') setLogin(true)
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
            setLogin(false)
            localStorage.setItem('loginState', false)
          }
        })
        .catch(() => {
          setLogin(false)
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
            <Route path="forget" element={<Suspense fallback={<Spinner />}><Forget login={login} setLogin={setLogin} /> </Suspense>} />
            <Route path="reset/:token" element={<Suspense fallback={<Spinner />}><ChangePassword login={login} setLogin={setLogin} /> </Suspense>} />
            <Route path="dashboard" element={<Dashboard login={login} setLogin={setLogin} />} />
            <Route path="explore" element={<Suspense fallback={<Spinner />}> <Explore login={login}/> </Suspense>} />
            <Route path="about" element={<Suspense fallback={<Spinner />}> <About login={login}/> </Suspense>} />
            <Route path="payment" element={<Suspense fallback={<Spinner />}> <Payment login={login} setLogin={setLogin}/> </Suspense>} />
            <Route path="contact" element={<Suspense fallback={<Spinner />}> <Contact login={login}/> </Suspense>} />
            <Route path="terms" element={<Suspense fallback={<Spinner />}> <Terms login={login}/> </Suspense>} />
            <Route path="privacy" element={<Suspense fallback={<Spinner />}> <Privacy login={login}/> </Suspense>} />
            <Route path="refund" element={<Suspense fallback={<Spinner />}> <Refund login={login}/> </Suspense>} />
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
