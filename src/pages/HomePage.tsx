import type { ReactElement } from 'react'
import Banner from '../layout/banner'
import BrandCarousel from '../layout/carousel'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import product01 from '../assets/images/products/01.jpg'
import product02 from '../assets/images/products/02.jpg'
import product03 from '../assets/images/products/03.jpg'
import product04 from '../assets/images/products/04.jpg'
import product05 from '../assets/images/products/05.jpg'
import product06 from '../assets/images/products/06.jpg'
import dirhamIcon from '../assets/images/Dirham Currency Symbol.svg'
import Image1 from '../assets/images/img-big-001.jpg'
import Image2 from '../assets/images/img-0001-1.png'
import Image3 from '../assets/images/img-stacked-02.jpg'
import Image4 from '../assets/images/img-0002.png'

import Service1 from '../assets/images/service-img-1.jpg'
import Service2 from '../assets/images/service-img-2.jpg'
import Service3 from '../assets/images/service-img-3.jpg'
import AdjustIcon from '@mui/icons-material/Adjust';


import Icon from '@mdi/react';
import { mdiPhoneClassic } from '@mdi/js';
import { mdiAt } from '@mdi/js';
import { mdiWhatsapp } from '@mdi/js';
import { WHATSAPP_PHONE } from '../components/WhatsAppChatButton';



export default function HomePage(): ReactElement {
  const products = [
    { id: 1, title: 'Metal Lennons', sub: 'Cat-Eye Luxury', price: '49.99', image: product01 },
    { id: 2, title: 'Metal Lennons', sub: 'Cat-Eye Luxury', price: '49.99', image: product02 },
    { id: 3, title: 'Metal Lennons', sub: 'Cat-Eye Luxury', price: '49.99', image: product03 },
    { id: 4, title: 'Metal Lennons', sub: 'Cat-Eye Luxury', price: '49.99', image: product04 },
    { id: 5, title: 'Metal Lennons', sub: 'Cat-Eye Luxury', price: '49.99', image: product05 },
    { id: 6, title: 'Metal Lennons', sub: 'Cat-Eye Luxury', price: '49.99', image: product06 },
  ]

  const handleBookAppointment = (serviceName: string) => {
    const message = `Hello! I'd like to book an appointment for ${serviceName}.
Name: [Your Name]
Preferred Date: [DD/MM/YYYY]
Preferred Time: [HH:MM]
Additional Notes: [Share anything we should know in advance]`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`

    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank')
    }
  }

  return (



    <section className="home-page">
      <Banner />
      <div className='section-product-list mt-50 mb-40'>
        <h2 className='section-title text-center text-4xl font-semibold'>Browse our products</h2>
        <p className='section-sub text-center text-lg font-light mt-1'>Explore our new summer collection</p>

        <div className='product-list-page flex flex-wrap'>
          {products.map(({ id, title, sub, price, image }) => (
            <div key={id} className='product-item w-1/3'>
              <img src={image} alt={title}  className='product-img'/>
              <h3 className='product-title font-semibold'>{title}</h3>
              <p className='product-category'>{sub}</p>
              <p className='product-price '>
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
      </div>

      <div className='section2 flex'>
        <div className='w-1/2 relative'>
          <img src={Image1} />
          <img src={Image2} className='absolute -right-15 bottom-0 w-1/2 z-1' />
        </div>
        <div className='w-1/2'>
          <div className='txt-div '>
            <div className='txt-center'>
              <h1 className='text-3xl font-semibold uppercase'>Blue light optical lens</h1>
              <p className='text-lg font-light mt-2'>Lorem ipsum dolore amet, vivid vel risus sit</p>
              <p className='mt-8 mb-4 font-light'><b className='font-medium'>Cras sodales odio non libero tincidunt amet</b><br></br>
                Lorem ipsum dolor sit amet, consectetur sit do</p>
              <p className='mt-4 mb-8 font-light'><b className='font-medium'>Amet lorem ipsum sodales odio vivid sit mor</b><br></br>
                Lorem ipsum dolor sit amet, consectetur del sint</p>
              <Button variant="outlined" className="fl-secondary-btn" >VIEW MORE</Button>
            </div>

          </div>
        </div>

      </div>

      <div className='section3 pt-40 pb-40'>
        <h2 className='section-title text-center text-4xl font-semibold'>Contact Us</h2>
        <p className='section-sub text-center text-lg font-light mt-1'>Our entire offer is only just one click away</p>

        <div className='contact-div mt-15'>
          <Container >
            <div className="grid grid-cols-3 gap-4">
              <div className='text-center flex flex-col items-center justify-center'>

                <Icon path={mdiWhatsapp} size={2} />

                <h2 className='text-xl font-semibold mt-2'>+971 123 456 7890</h2>
                <p className='font-light text-base mt-2'>Nec mauris sollicitudin, pharetra ex non, consectetur mauris vitae orci sit</p>
              </div>
              <div className='text-center flex flex-col items-center justify-center'>

                <Icon path={mdiAt} size={2} />

                <h2 className='text-xl font-semibold mt-2'>facelook@example.com</h2>
                <p className='font-light text-base mt-2'>Nec mauris sollicitudin, pharetra ex non, consectetur mauris vitae orci sit</p>
              </div>
              <div className='text-center flex flex-col items-center justify-center'>

                <Icon path={mdiPhoneClassic} size={2} />

                <h2 className='text-xl font-semibold mt-2'>+971 123 456 7890</h2>
                <p className='font-light text-base mt-2'>Nec mauris sollicitudin, pharetra ex non, consectetur mauris vitae orci sit</p>
              </div>
            </div>
          </Container>
        </div>

      </div>

       <div className='section4 pt-40 pb-40'>
        <h2 className='section-title text-center text-4xl font-semibold'>Book a meeting now</h2>
        <p className='section-sub text-center text-lg font-light mt-1'>ook your term online fast and easy</p>

        <div className='services-div mt-15'>
          <Container >
            <div className="grid grid-cols-3 gap-4">
              <div className=' flex flex-col '>
              <div className='image-div'>
                <img src={Service1} className='' />
              </div>
              <div className='txt-div'>
                <h3 className='text-xl font-semibold mt-7 '>Comprehensive eye exams</h3>
                <ul className='mt-2 mb-5'>
                  <li><AdjustIcon className='list-icon'/> Lorem ipsum dolor sit amet, vivir elit purss</li>
                  <li><AdjustIcon className='list-icon'/> Consequat dolor duis, consectetur </li>
                  <li><AdjustIcon className='list-icon'/> Nostrum vivid, dolor lorem ipsum aliquiam</li>
                </ul>
                <Button
                  variant="outlined"
                  className="fl-secondary-btn"
                  type="button"
                  onClick={() => handleBookAppointment('Comprehensive eye exams')}
                >
                  Book appointment
                </Button>
              </div>
              </div>
              <div className=' flex flex-col '>
              <div className='image-div'>
                <img src={Service2} className='' />
              </div>
              <div className='txt-div'>
                <h3 className='text-xl font-semibold mt-7 '>Comprehensive eye exams</h3>
                <ul className='mt-2 mb-5'>
                  <li><AdjustIcon className='list-icon'/> Lorem ipsum dolor sit amet, vivir elit purss</li>
                  <li><AdjustIcon className='list-icon'/> Consequat dolor duis, consectetur </li>
                  <li><AdjustIcon className='list-icon'/> Nostrum vivid, dolor lorem ipsum aliquiam</li>
                </ul>
                <Button
                  variant="outlined"
                  className="fl-secondary-btn"
                  type="button"
                  onClick={() => handleBookAppointment('Comprehensive eye exams')}
                >
                  Book appointment
                </Button>
              </div>
              </div>
               <div className=' flex flex-col '>
              <div className='image-div'>
                <img src={Service3} className='' />
              </div>
              <div className='txt-div'>
                <h3 className='text-xl font-semibold mt-7 '>Comprehensive eye exams</h3>
                <ul className='mt-2 mb-5'>
                  <li><AdjustIcon className='list-icon'/> Lorem ipsum dolor sit amet, vivir elit purss</li>
                  <li><AdjustIcon className='list-icon'/> Consequat dolor duis, consectetur </li>
                  <li><AdjustIcon className='list-icon'/> Nostrum vivid, dolor lorem ipsum aliquiam</li>
                </ul>
                <Button
                  variant="outlined"
                  className="fl-secondary-btn"
                  type="button"
                  onClick={() => handleBookAppointment('Comprehensive eye exams')}
                >
                  Book appointment
                </Button>
              </div>
              </div>
            </div>
          </Container>
        </div>

      </div>

        <div className='brand-div p-20'>
         <Container >
         <BrandCarousel/>
          </Container>
      </div>

        <div className='section2 flex'>
      
        <div className='w-1/2'>
          <div className='txt-div '>
            <div className='txt-center'>
              <h1 className='text-3xl font-semibold uppercase'>Autumn / winter shop 2021</h1>
              <p className='text-lg font-light mt-2'>Lorem ipsum dolore amet, vivid vel risus sit</p>
              <p className='mt-8 mb-4 font-light'><b className='font-medium'>Explore new collection of glasses in our online shop</b><br></br>
                Nullam vitae eros nisi. Vestibulum non purus vitae massa mollis sagittis vesti bulum.</p>
              <p className='mt-4 mb-8 font-light'><b className='font-medium'>Unique items with ergonomic design style</b><br></br>
                Nullam vitae eros nisi. Vestibulum non purus vitae massa mollis sagittis vesti bulum.</p>
              <Button variant="outlined" className="fl-secondary-btn" >VIEW MORE</Button>
            </div>

          </div>
        </div>
          <div className='w-1/2 relative'>
          <img src={Image3} />
          <img src={Image4} className='absolute -left-15 bottom-0 w-1/2 z-1' />
        </div>

      </div>

    


  



    </section>
  )
}
