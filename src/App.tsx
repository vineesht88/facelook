import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './layout/footer'
import Header from './layout/header'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import Preloader from './components/Preloader'

const NotFound = () => (
  <section className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-24 text-center">
    <h1 className="text-4xl font-bold text-white">Page not found</h1>
    <p className="text-base text-slate-300">
      We couldn&apos;t find the page you were looking for. Try visiting a different section using the navigation
      above.
    </p>
  </section>
)

function App() {
  const location = useLocation()
  const [isPageLoading, setIsPageLoading] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    let isCancelled = false
    let settled = false
    const cleanupFns: Array<() => void> = []
    const start = performance.now()
    const minDuration = location.pathname === '/' ? 1000 : 1000

    const finalize = () => {
      if (settled || isCancelled) return
      settled = true
      cleanupFns.forEach((fn) => fn())
      cleanupFns.length = 0
      setIsPageLoading(false)
    }

    const finish = () => {
      if (settled || isCancelled) return
      const elapsed = performance.now() - start
      if (elapsed >= minDuration) {
        finalize()
        return
      }
      const delayTimer = window.setTimeout(finalize, minDuration - elapsed)
      cleanupFns.push(() => window.clearTimeout(delayTimer))
    }

    const monitorImages = () => {
      const images = Array.from(document.querySelectorAll('img')).filter(
        (img) => !img.hasAttribute('data-preloader-ignore')
      )
      const pending = images.filter((img) => !(img.complete && img.naturalWidth > 0))

      if (pending.length === 0) {
        finish()
        return
      }

      let remaining = pending.length

      const handleImageSettled = () => {
        remaining -= 1
        if (remaining <= 0) {
          finish()
        }
      }

      const failSafeTimer = window.setTimeout(finish, minDuration + 5000)
      cleanupFns.push(() => window.clearTimeout(failSafeTimer))

      pending.forEach((img) => {
        const onResolve = () => {
          img.removeEventListener('load', onResolve)
          img.removeEventListener('error', onResolve)
          handleImageSettled()
        }

        img.addEventListener('load', onResolve)
        img.addEventListener('error', onResolve)

        cleanupFns.push(() => {
          img.removeEventListener('load', onResolve)
          img.removeEventListener('error', onResolve)
        })
      })
    }

    const onWindowLoad = () => {
      window.removeEventListener('load', onWindowLoad)
      monitorImages()
    }

    setIsPageLoading(true)

    if (document.readyState === 'complete') {
      monitorImages()
    } else {
      window.addEventListener('load', onWindowLoad)
      cleanupFns.push(() => window.removeEventListener('load', onWindowLoad))
    }

    return () => {
      isCancelled = true
      cleanupFns.forEach((fn) => fn())
      cleanupFns.length = 0
    }
  }, [location.pathname])

  return (
    <div className="">
      {isPageLoading && <Preloader />}
      <Header />
      <main className="flex-1">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
