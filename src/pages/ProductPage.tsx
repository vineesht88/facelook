import type { ReactElement } from 'react'
import BrandCarousel from '../layout/carousel'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Pagebanner from '../assets/images/product-list.jpg'
import product01 from '../assets/images/products/01.jpg'
import product02 from '../assets/images/products/02.jpg'
import product03 from '../assets/images/products/03.jpg'
import product04 from '../assets/images/products/04.jpg'
import product05 from '../assets/images/products/05.jpg'
import product06 from '../assets/images/products/06.jpg'
import dirhamIcon from '../assets/images/Dirham Currency Symbol.svg'

export default function ProductPage(): ReactElement {
 const products = [
    { id: 1, title: 'Metal Lennons', sub: 'Cat-Eye Luxury', price: '49.99', image: product01 },
    { id: 2, title: 'Metal Lennons', sub: 'Cat-Eye Luxury', price: '49.99', image: product02 },
    { id: 3, title: 'Metal Lennons', sub: 'Cat-Eye Luxury', price: '49.99', image: product03 },
    { id: 4, title: 'Metal Lennons', sub: 'Cat-Eye Luxury', price: '49.99', image: product04 },
    { id: 5, title: 'Metal Lennons', sub: 'Cat-Eye Luxury', price: '49.99', image: product05 },
    { id: 6, title: 'Metal Lennons', sub: 'Cat-Eye Luxury', price: '49.99', image: product06 },
  ]

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

      <div className='product-list-page flex flex-wrap'>
          {products.map(({ id, title, sub, price, image }) => (
            <div key={id} className='product-item w-1/4'>
              <img src={image} alt={title} />
              <h3 className='product-title font-semibold'>{title}</h3>
              <p className='product-category'>{sub}</p>
              <p className='product-price mb-30'>
                <img
                  src={dirhamIcon}
                  alt='Dirham currency symbol'
                  className='product-price-icon'
                />
                {price}
              </p>
            </div>
          ))}
        </div>
    

       <div className='brand-div p-20'>
         <Container >
         <BrandCarousel/>
          </Container>
      </div>
     
    </section>
  )
}
