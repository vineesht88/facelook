import type { ReactElement } from 'react'
import BrandCarousel from '../layout/carousel'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Pagebanner from '../assets/images/About-us.jpg'
import Aboutbanner2 from '../assets/images/about-us-img-01.jpg'

import AboutIcon1 from '../assets/images/icon-1.png'
import AboutIcon2 from '../assets/images/icon-2.png'
import AboutIcon3 from '../assets/images/icon-3.png'

import AboutImage1 from '../assets/images/About-us-page-img-001.jpg'
import AboutImage3 from '../assets/images/About-us-single-img-03-450x300.jpg'
import AdjustIcon from '@mui/icons-material/Adjust';



export default function AboutPage(): ReactElement {
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
          <h1>About Us</h1>
          <p>Donec varius semper magna sit amet dignissim</p>
        </div>
        <div className='banner-bg'></div>

      </div>
      <div className="about-page-section1" >

        <img src={Aboutbanner2} className='m-auto'/>
          <div className="grid grid-cols-3 gap-4 mt-10">
                      <div className='text-center flex flex-col items-center justify-center'>
        
                         <img src={AboutIcon1} />
        
                        <h2 className='text-lg font-light mt-2 uppercase'>Utility vision</h2>
                      
                      </div>
                      <div className='text-center flex flex-col items-center justify-center'>
        
                        <img src={AboutIcon2}/>
        
                        <h2 className='text-lg font-light mt-2 uppercase'>Vision exams</h2>
                        
                      </div>
                      <div className='text-center flex flex-col items-center justify-center'>
        
                        <img src={AboutIcon3}/>
        
                        <h2 className='text-lg font-light mt-2 uppercase'>Retina exams</h2>
                       
                      </div>
                    </div>
        <p className='text-center font-light mt-5 mb-6 leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
       <Button variant="contained" className='fl-primary-black-btn'>Contact Us</Button>
      </div>
      <div className='about-section2 mt-15'>
        <div className='image-div'>
           <img src={AboutImage1} />
        </div>
        <div className='content-div flex justify-center items-center flex-col'>
        <div className='content-center '>
          <img src={AboutImage3} />
          <h2 className='mt-4'>Routine eye exams</h2>
          <ul className='mt-4'>

            <li><AdjustIcon className='list-icon'/>Lorem ipsum dolor sit amet, consectetur adipisc</li>
            <li><AdjustIcon className='list-icon'/>Pellentesque dolor sit ipsum amet lorem</li>
            <li><AdjustIcon className='list-icon'/>Lorem ipsum dolor sit amet vivid parte dolor amet</li>
          </ul>

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
