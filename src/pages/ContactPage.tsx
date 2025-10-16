import type { ReactElement } from 'react'
import Pagebanner from '../assets/images/product-list.jpg'

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
          <h1>Products</h1>
          <p>Donec varius semper magna sit amet dignissim</p>
        </div>
        <div className='banner-bg'></div>

      </div>
      <div className="contact-page"></div> 
    </section>
  )
}
