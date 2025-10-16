import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/face-look.png'
import logoWhite from '../assets/images/face-look-w.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`facelook-header${isScrolled ? ' scrolled' : ''}`}>
      <div className='header-top-area'>
        <div className='top-area-left'>
            <ul className='social-icons'>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className='social-icon'/>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className='social-icon'/>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className='social-icon'/>
              </a>
            </li>
            </ul>

            <p className='email-id'><EmailIcon className='email-icon'/>facelook@example.com</p>
        </div>
        <div className='top-area-right'>

<div className='widget-holder'>
  <span>
    <LocationOnIcon className='widget-icon'/>Amman Street, Qusais, Duabi, UAE
  </span>
  <span>
    <PhoneAndroidIcon className='widget-icon'/>+971 123 456 7890
  </span>
  <span>
    <AccessTimeIcon className='widget-icon'/>10:00 AM - 6:00 PM
  </span>
</div>


        </div>
      </div>
      <div className="page-header flex items-center justify-center flex-wrap relative">
  {/* Logo centered */}
  <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3">
    <div className="logo-wrapper">
      <img
        src={logo}
        alt="Facelook logo"
        className={`logo-image ${isScrolled ? 'is-hidden' : 'is-visible'}`}
      />
      <img
        src={logoWhite}
        alt=""
        aria-hidden="true"
        className={`logo-image ${isScrolled ? 'is-visible' : 'is-hidden'}`}
      />
    </div>
  </Link>

  {/* Mobile menu button (left side) */}
  <button
    className="md:hidden p-2 rounded focus:outline-none focus:ring absolute left-4"
    aria-label="Open menu"
    onClick={() => setMenuOpen((open) => !open)}
  >
    <svg width="24" height="24" fill="currentColor">
      <rect x="4" y="7" width="16" height="2" rx="1" />
      <rect x="4" y="13" width="16" height="2" rx="1" />
    </svg>
  </button>

  {/* Desktop nav (right side) */}
  <nav
    aria-label="Primary"
    className="hidden md:flex items-center gap-10 absolute right-4 header-main-nav"
  >
    {navItems.map(({ label, path }) => (
      <NavLink
        key={path}
        to={path}
        className={({ isActive }) =>
          `whitespace-nowrap transition-colors duration-200 ${isActive ? 'menu-active' : ''}`
        }
      >
        {label}
      </NavLink>
    ))}
  </nav>

  {/* Mobile nav with animation */}
  <div
    className={`overflow-hidden transition-all duration-300 md:hidden w-full ${
      menuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
    }`}
  >
    <nav
      aria-label="Mobile Primary"
      className="flex flex-col gap-2 header-main-nav"
    >
      {navItems.map(({ label, path }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `whitespace-nowrap transition-colors duration-200 px-4 py-2 rounded ${
              isActive ? 'menu-active' : ''
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  </div>
</div>

    </header>
  )
}
