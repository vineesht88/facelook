import type { ReactElement } from 'react'
import Pagebanner from '../assets/images/product-list.jpg'
import BrandCarousel from '../layout/carousel'

import Container from '@mui/material/Container';
export default function ContactPage(): ReactElement {
  return (
    <section >
      <div
        className="page-header-banner"
        style={{
          backgroundImage: `url(${Pagebanner})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div className="heading-div">
          <h1>Contact Us</h1>
          <p>Donec varius semper magna sit amet dignissim</p>
        </div>
        <div className='banner-bg'></div>

      </div>
      <div className="contact-page">
        <div style={{ maxWidth: 1200, margin: '40px auto', padding: '0 16px' }}>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <div  style={{ flex: 1, minWidth: 280, background: '#f9f9f9', padding: 24, borderRadius: 8 }}>
          <h2 className='text-2xl uppercase font-semibold mb-5'>Our Address</h2>
          <p className='text-lg'><strong>Face Look Opticals L. L. C</strong></p>
          <p className='font-light'>Sahara Building - Shop No. 3<br />
            opposite Fortune Plaza Hotel<br />
            Phone: 0557613600<br />Email: facelook@example.com</p>
          <h3 className='mt-5 font-semibold mb-2'>Opening Hours</h3>
          <p className='font-light'>Mon - Fri: 9:00 AM – 6:00 PM<br />Sat: 10:00 AM – 4:00 PM<br />Sun: Closed</p>
        </div>

        <div style={{ flex: 1, minWidth: 280, background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h2 className='text-2xl uppercase font-semibold mb-5'>Enquiry Form</h2>
          <form onSubmit={(e: any) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, color: '#111827' }}>
                <span style={{ fontWeight: 600 }}>Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  style={{ width: '100%', padding: '10px 12px', marginTop: 6, border: '1px solid #e5e7eb', borderRadius: 8, fontSize: 14, transition: 'box-shadow .15s ease' }}
                  onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 4px rgba(59,130,246,0.12)')}
                  onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, color: '#111827' }}>
                <span style={{ fontWeight: 600 }}>Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  style={{ width: '100%', padding: '10px 12px', marginTop: 6, border: '1px solid #e5e7eb', borderRadius: 8, fontSize: 14, transition: 'box-shadow .15s ease' }}
                  onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 4px rgba(59,130,246,0.12)')}
                  onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, color: '#111827' }}>
                <span style={{ fontWeight: 600 }}>Phone</span>
                <input
                  name="phone"
                  type="tel"
                  style={{ width: '100%', padding: '10px 12px', marginTop: 6, border: '1px solid #e5e7eb', borderRadius: 8, fontSize: 14, transition: 'box-shadow .15s ease' }}
                  onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 4px rgba(59,130,246,0.12)')}
                  onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, color: '#111827' }}>
                <span style={{ fontWeight: 600 }}>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  style={{ width: '100%', padding: '10px 12px', marginTop: 6, border: '1px solid #e5e7eb', borderRadius: 8, fontSize: 14, resize: 'vertical', transition: 'box-shadow .15s ease' }}
                  onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 4px rgba(59,130,246,0.12)')}
                  onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
                />
              </label>
            </>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" className='fl-primary-black-btn'>
            Send Enquiry
          </button>
            </div>
          </form>
        </div>
          </div>

          <div style={{ marginTop: 24 }}>
        <h2 className='text-2xl uppercase font-semibold mb-5 mt-10'>Find us on the map</h2>
        <div style={{ width: '100%', height: 400, borderRadius: 8, overflow: 'hidden', marginTop: 12 }}>
          <iframe
            title="Company location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.163973216038!2d55.38093491965781!3d25.267664506340036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d15638676b3%3A0x13479850d13e5502!2sFace%20Look%20Opticals%20L.%20L.%20C%20%7C%20RTA%20Eye%20test%20centre!5e0!3m2!1sen!2sae!4v1760684102159!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
          </div>
        </div>
      </div>
      <div className='brand-div p-20'>
         <Container >
         <BrandCarousel/>
          </Container>
      </div>
    </section>
  )
}
