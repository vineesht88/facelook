import { useState, type ReactElement } from 'react'
import BrandCarousel from '../layout/carousel'

import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Pagebanner from '../assets/images/product-list.jpg'
import product01 from '../assets/images/products/01.jpg'
import product02 from '../assets/images/products/02.jpg'
import product03 from '../assets/images/products/03.jpg'
import product04 from '../assets/images/products/04.jpg'
import product05 from '../assets/images/products/05.jpg'
import product06 from '../assets/images/products/06.jpg'
import product07 from '../assets/images/products/07.jpg'
import dirhamIcon from '../assets/images/Dirham Currency Symbol.svg'

const products = [
  { id: 1, title: 'Metal Lennons', sub: 'Cat-Eye Luxury', category: 'Sunglasses', brand: 'Shine', price: 149.99, image: product01 },
  { id: 2, title: 'Classic Aviators', sub: 'Timeless Frames', category: 'Sunglasses', brand: 'VistaMax', price: 89.99, image: product02 },
  { id: 3, title: 'Urban Optics', sub: 'Lightweight Comfort', category: 'Optical', brand: 'UrbanEye', price: 129.99, image: product03 },
  { id: 4, title: 'Pro Sports Wraps', sub: 'Active Essentials', category: 'Sports', brand: 'AthletiQ', price: 179.99, image: product04 },
  { id: 5, title: 'Blue Light Shield', sub: 'Digital Ready', category: 'Optical', brand: 'VisionGuard', price: 74.99, image: product05 },
  { id: 6, title: 'Retro Rounders', sub: 'Vintage Style', category: 'Sunglasses', brand: 'Shine', price: 59.99, image: product06 },
  { id: 7, title: 'Retro Rounders', sub: 'Vintage Style', category: 'Sunglasses', brand: 'Shine', price: 59.99, image: product07 },
]

const categoryOptions = ['All', ...Array.from(new Set(products.map(({ category }) => category)))]
const brandOptions = ['All', ...Array.from(new Set(products.map(({ brand }) => brand)))]
const MIN_PRICE = Math.floor(Math.min(...products.map(({ price }) => price)))
const MAX_PRICE = Math.ceil(Math.max(...products.map(({ price }) => price)))

export default function ProductPage(): ReactElement {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedBrand, setSelectedBrand] = useState<string>('All')
  const [priceRange, setPriceRange] = useState<number[]>([MIN_PRICE, MAX_PRICE])

  const filteredProducts = products.filter(({ category, price, brand }) => {
    const withinCategory = selectedCategory === 'All' || category === selectedCategory
    const withinBrand = selectedBrand === 'All' || brand === selectedBrand
    const withinPrice = price >= priceRange[0] && price <= priceRange[1]
    return withinCategory && withinBrand && withinPrice
  })

  const handleSliderChange = (_: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      setPriceRange([value[0], value[1]])
    }
  }

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value)
  }

  const handleBrandChange = (event: SelectChangeEvent) => {
    setSelectedBrand(event.target.value)
  }

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

      <div className='product-page-layout'>
        <aside className='product-filter-panel'>
          <div className='filter-group'>
            <FormControl fullWidth size='small'>
              <InputLabel id='category-filter-label' className='filter-select-label'>
                Shop by Category
              </InputLabel>
              <Select
                labelId='category-filter-label'
                id='category-filter'
                value={selectedCategory}
                label='Shop by Category'
                onChange={handleCategoryChange}
              >
                {categoryOptions.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className='filter-group'>
            <FormControl fullWidth size='small'>
              <InputLabel id='brand-filter-label' className='filter-select-label'>
                Brand
              </InputLabel>
              <Select
                labelId='brand-filter-label'
                id='brand-filter'
                value={selectedBrand}
                label='Brand'
                onChange={handleBrandChange}
              >
                {brandOptions.map((brand) => (
                  <MenuItem key={brand} value={brand}>
                    {brand}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className='filter-group'>
            <div className='filter-heading'>Price Range</div>
            <div className='slider-wrapper'>
              <div className='slider-values'>
                <span>AED {priceRange[0].toFixed(0)}</span>
                <span>AED {priceRange[1].toFixed(0)}</span>
              </div>
              <Slider
                value={priceRange}
                onChange={handleSliderChange}
                min={MIN_PRICE}
                max={MAX_PRICE}
                valueLabelDisplay='auto'
                getAriaLabel={() => 'Price range'}
                step={5}
              />
            </div>
          </div>
        </aside>

        <div className='product-list-page flex flex-wrap'>
          {filteredProducts.map(({ id, title, sub, price, image, brand }) => (
            <div key={id} className='product-item '>
              <img src={image} alt={title} />
              <h3 className='product-title font-semibold'>{title}</h3>
              <p className='product-category'>{sub}</p>
              <p className='product-brand'>{brand}</p>
              <p className='product-price '>
                <img
                  src={dirhamIcon}
                  alt='Dirham currency symbol'
                  className='product-price-icon'
                />
                {price.toFixed(2)}
              </p>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <div className='no-results'>
              <p>No products match the selected filters.</p>
            </div>
          )}
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
