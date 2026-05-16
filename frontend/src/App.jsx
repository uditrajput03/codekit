import { useState, lazy, Suspense, useEffect, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Spinner from './components/Spinner'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'

const About = lazy(() => import("./pages/About"))
const Payment = lazy(() => import("./pages/Payment"))
const Contact = lazy(() => import('./pages/Contact'))
const Terms = lazy(() => import('./pages/Terms'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Refund = lazy(() => import('./pages/Refund'))
const Explore = lazy(() => import('./pages/Explore'))
const Forget = lazy(() => import('./pages/Forget'))
const ChangePassword = lazy(() => import('./pages/ChangePassword'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Download = lazy(() => import('./pages/Download'))

function App() {
  const [login, setLoginState] = useState(false)

  const setLogin = useCallback((bool) => {
    setLoginState(bool)
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setLoginState(false)
      localStorage.removeItem('loginState')
      return
    }

    fetch(import.meta.env.VITE_BACKEND + "/auth", {
      method: "get",
      headers: { authorization: token }
    })
      .then(res => res.json())
      .then((res) => {
        if (res.email != null) {
          localStorage.setItem('loginState', 'true')
          setLoginState(true)
        } else {
          localStorage.setItem('loginState', 'false')
          localStorage.removeItem('token')
          setLoginState(false)
        }
      })
      .catch(() => {
        setLoginState(false)
      })
  }, [])

  const suspenseFallback = <Spinner />

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home login={login} setLogin={setLogin} />} />
          <Route path="/login" element={<Login login={login} setLogin={setLogin} />} />
          <Route path="/signup" element={<Signup login={login} setLogin={setLogin} />} />
          <Route path="/forget" element={<Suspense fallback={suspenseFallback}><Forget login={login} setLogin={setLogin} /></Suspense>} />
          <Route path="/reset/:token" element={<Suspense fallback={suspenseFallback}><ChangePassword login={login} setLogin={setLogin} /></Suspense>} />
          <Route path="/dashboard" element={<Dashboard login={login} setLogin={setLogin} />} />
          <Route path="/explore" element={<Suspense fallback={suspenseFallback}><Explore login={login} /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={suspenseFallback}><About login={login} /></Suspense>} />
          <Route path="/payment" element={<Suspense fallback={suspenseFallback}><Payment login={login} setLogin={setLogin} /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={suspenseFallback}><Contact login={login} /></Suspense>} />
          <Route path="/terms" element={<Suspense fallback={suspenseFallback}><Terms login={login} /></Suspense>} />
          <Route path="/privacy" element={<Suspense fallback={suspenseFallback}><Privacy login={login} /></Suspense>} />
          <Route path="/refund" element={<Suspense fallback={suspenseFallback}><Refund login={login} /></Suspense>} />
          <Route path="/download/:orderId" element={<Suspense fallback={suspenseFallback}><Download login={login} /></Suspense>} />
          <Route path="*" element={<Suspense fallback={suspenseFallback}><NotFound login={login} /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
