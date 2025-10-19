import { useEffect, useState, type KeyboardEvent as ReactKeyboardEvent, type MouseEvent as ReactMouseEvent, type ReactElement } from 'react'
import BrandCarousel from '../layout/carousel'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import type { SelectChangeEvent } from '@mui/material/Select'
import Slider from '@mui/material/Slider'
import Pagebanner from '../assets/images/product-list.jpg'
import product01 from '../assets/images/products/01.jpg'
import product01Alt1 from '../assets/images/products/01-1.jpg'
import product01Alt2 from '../assets/images/products/01-2.jpg'
import product02 from '../assets/images/products/02.jpg'
import product02Alt1 from '../assets/images/products/02-1.jpg'
import product02Alt2 from '../assets/images/products/02-2.jpg'
import product03 from '../assets/images/products/03.jpg'
import product03Alt1 from '../assets/images/products/03-1.jpg'
import product03Alt2 from '../assets/images/products/03-2.jpg'
import product04 from '../assets/images/products/04.jpg'
import product04Alt1 from '../assets/images/products/04-1.jpg'
import product04Alt2 from '../assets/images/products/04-2.jpg'
import product05 from '../assets/images/products/05.jpg'
import product05Alt1 from '../assets/images/products/05-1.jpg'
import product05Alt2 from '../assets/images/products/05-2.jpg'
import product06 from '../assets/images/products/06.jpg'
import product06Alt1 from '../assets/images/products/06-1.jpg'
import product06Alt2 from '../assets/images/products/06-2.jpg'
import product07 from '../assets/images/products/07.jpg'
import product07Alt1 from '../assets/images/products/07-1.jpg'
import product07Alt2 from '../assets/images/products/07-2.jpg'
import dirhamIcon from '../assets/images/Dirham Currency Symbol.svg'
import { WHATSAPP_PHONE } from '../components/WhatsAppChatButton'

type Product = {
  id: number
  title: string
  sub: string
  category: string
  brand: string
  price: number
  image: string
  gallery: string[]
}

const products: Product[] = [
  {
    id: 1,
    title: 'Metal Lennons',
    sub: 'Cat-Eye Luxury',
    category: 'Sunglasses',
    brand: 'Shine',
    price: 149.99,
    image: product01,
    gallery: [product01, product01Alt1, product01Alt2],
  },
  {
    id: 2,
    title: 'Classic Aviators',
    sub: 'Timeless Frames',
    category: 'Sunglasses',
    brand: 'VistaMax',
    price: 89.99,
    image: product02,
    gallery: [product02, product02Alt1, product02Alt2],
  },
  {
    id: 3,
    title: 'Urban Optics',
    sub: 'Lightweight Comfort',
    category: 'Optical',
    brand: 'UrbanEye',
    price: 129.99,
    image: product03,
    gallery: [product03, product03Alt1, product03Alt2],
  },
  {
    id: 4,
    title: 'Pro Sports Wraps',
    sub: 'Active Essentials',
    category: 'Sports',
    brand: 'AthletiQ',
    price: 179.99,
    image: product04,
    gallery: [product04, product04Alt1, product04Alt2],
  },
  {
    id: 5,
    title: 'Blue Light Shield',
    sub: 'Digital Ready',
    category: 'Optical',
    brand: 'VisionGuard',
    price: 74.99,
    image: product05,
    gallery: [product05, product05Alt1, product05Alt2],
  },
  {
    id: 6,
    title: 'Retro Rounders',
    sub: 'Vintage Style',
    category: 'Sunglasses',
    brand: 'Shine',
    price: 59.99,
    image: product06,
    gallery: [product06, product06Alt1, product06Alt2],
  },
  {
    id: 7,
    title: 'Retro Rounders',
    sub: 'Vintage Style',
    category: 'Sunglasses',
    brand: 'Shine',
    price: 59.99,
    image: product07,
    gallery: [product07, product07Alt1, product07Alt2],
  },
]

const categoryOptions = ['All', ...Array.from(new Set(products.map(({ category }) => category)))]
const brandOptions = ['All', ...Array.from(new Set(products.map(({ brand }) => brand)))]
const MIN_PRICE = Math.floor(Math.min(...products.map(({ price }) => price)))
const MAX_PRICE = Math.ceil(Math.max(...products.map(({ price }) => price)))

export default function ProductPage(): ReactElement {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedBrand, setSelectedBrand] = useState<string>('All')
  const [priceRange, setPriceRange] = useState<number[]>([MIN_PRICE, MAX_PRICE])
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null)

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

  const handleProductClick = (product: Product) => {
    setPreviewProduct(product)
  }

  const openWhatsAppEnquiry = (product: Product) => {
    const imageUrl =
      typeof window !== 'undefined' ? `${window.location.origin}${product.image}` : product.image

    const message = `Hello! I'm interested in the ${product.title} (${product.brand}) from your ${product.category} collection.
Price: AED ${product.price.toFixed(2)}
Image: ${imageUrl}
Could you share more details?`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`

    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank')
    }
  }

  const handleProductEnquiryClick = (event: ReactMouseEvent<HTMLButtonElement>, product: Product) => {
    event.stopPropagation()
    openWhatsAppEnquiry(product)
  }

  const handleProductKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>, product: Product) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleProductClick(product)
    }
  }

  const handleModalClose = () => {
    setPreviewProduct(null)
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
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className='product-item'
              role='button'
              tabIndex={0}
              onClick={() => handleProductClick(product)}
              onKeyDown={(event) => handleProductKeyDown(event, product)}
              aria-label={`View details for ${product.title}`}
            >
              <img src={product.image} alt={product.title} />
              <h3 className='product-title font-semibold'>{product.title}</h3>
              <p className='product-category'>{product.sub}</p>
              <p className='product-brand'>{product.brand}</p>
              <p className='product-price '>
                <img
                  src={dirhamIcon}
                  alt='Dirham currency symbol'
                  className='product-price-icon'
                />
                {product.price.toFixed(2)}
              </p>
              <div className='product-card-actions'>
                <Button
                  variant='outlined'
                  className='fl-secondary-btn product-enquiry-btn'
                  type='button'
                  onClick={(event) => handleProductEnquiryClick(event, product)}
                >
                  WhatsApp enquiry
                </Button>
              </div>
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
      <ProductPreviewModal
        product={previewProduct}
        onClose={handleModalClose}
        onEnquire={openWhatsAppEnquiry}
      />
    </section>
  )
}

type ProductPreviewModalProps = {
  product: Product | null
  onClose: () => void
  onEnquire: (product: Product) => void
}

function ProductPreviewModal({ product, onClose, onEnquire }: ProductPreviewModalProps): ReactElement | null {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (product) {
      setActiveIndex(0)
    }
  }, [product])

  if (!product) {
    return null
  }

  const gallery = product.gallery.length > 0 ? product.gallery : [product.image]
  const showNavigation = gallery.length > 1

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % gallery.length)
  }

  return (
    <Dialog open onClose={onClose} maxWidth='md' fullWidth className='product-preview-modal'>
      <IconButton aria-label='Close product preview' onClick={onClose} className='product-preview-close'>
        <CloseIcon />
      </IconButton>
      <DialogContent className='product-preview-content'>
        <div className='product-gallery'>
          <div className='product-gallery-main'>
            <img
              src={gallery[activeIndex]}
              alt={`${product.title} view ${activeIndex + 1}`}
              className='product-gallery-image'
            />
            {showNavigation && (
              <>
                <IconButton
                  aria-label='Previous product image'
                  onClick={handlePrev}
                  className='product-gallery-nav product-gallery-nav--prev'
                  size='large'
                >
                  <ChevronLeftIcon />
                </IconButton>
                <IconButton
                  aria-label='Next product image'
                  onClick={handleNext}
                  className='product-gallery-nav product-gallery-nav--next'
                  size='large'
                >
                  <ChevronRightIcon />
                </IconButton>
              </>
            )}
          </div>
          {gallery.length > 1 && (
            <div className='product-gallery-thumbnails'>
              {gallery.map((imageSrc, index) => (
                <button
                  key={`${product.id}-thumb-${imageSrc}-${index}`}
                  type='button'
                  className={`product-gallery-thumbnail${index === activeIndex ? ' is-active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={imageSrc} alt={`${product.title} thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className='product-preview-details'>
          <h2 className='product-preview-title'>{product.title}</h2>
          <p className='product-preview-sub'>{product.sub}</p>
          <dl className='product-preview-meta'>
            <div>
              <dt>Brand</dt>
              <dd>{product.brand}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{product.category}</dd>
            </div>
            <div>
              <dt>Price</dt>
              <dd>AED {product.price.toFixed(2)}</dd>
            </div>
          </dl>
          <Button
            variant='outlined'
            className='fl-secondary-btn product-enquiry-btn'
            type='button'
            onClick={() => onEnquire(product)}
          >
            WhatsApp enquiry
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
