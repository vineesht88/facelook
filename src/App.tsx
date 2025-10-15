import { Route, Routes } from 'react-router-dom'
import Footer from './layout/footer'
import Header from './layout/header'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

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
  return (
    <div className="">
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
