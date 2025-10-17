import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { useEffect, useState } from 'react'

const SCROLL_THRESHOLD = 240

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) {
    return null
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button type="button" className="scroll-top" onClick={scrollToTop} aria-label="Back to top">
      <ArrowUpwardIcon fontSize="small" />
    </button>
  )
}
