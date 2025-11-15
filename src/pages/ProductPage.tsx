import { useEffect, useState, type KeyboardEvent as ReactKeyboardEvent, type MouseEvent as ReactMouseEvent, type ReactElement } from 'react'
import axios from 'axios'
import BrandCarousel from '../layout/carousel'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Pagination from '@mui/material/Pagination'
import Select from '@mui/material/Select'
import type { SelectChangeEvent } from '@mui/material/Select'
import Slider from '@mui/material/Slider'
import Pagebanner from '../assets/images/product-list.jpg'
import dirhamIcon from '../assets/images/Dirham Currency Symbol.svg'
import { WHATSAPP_PHONE } from '../components/WhatsAppChatButton'
import type { ProductsResponse } from '../types/api'

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

const ITEMS_PER_PAGE = 8

export default function ProductPage(): ReactElement {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000])
  const [currentPage, setCurrentPage] = useState(1)
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null)

  const [categoryOptions, setCategoryOptions] = useState<string[]>([])
  const [brandOptions, setBrandOptions] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [isFilterChanging, setIsFilterChanging] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await axios.get<ProductsResponse>(`${import.meta.env.VITE_API_URL}/products`)
        const products = response.data.products.map(p => ({
          ...p,
          price: typeof p.price === 'string' ? parseFloat(p.price) : p.price,
          category: p.category || 'Uncategorized',
          brand: p.brand || 'Unknown',
          gallery: p.gallery || [p.image]
        }))
        
        setAllProducts(products)
        
        // Extract unique categories and brands
        const categories = Array.from(new Set(products.map(p => p.category)))
        const brands = Array.from(new Set(products.map(p => p.brand)))
        setCategoryOptions(categories)
        setBrandOptions(brands)
        
        // Set price range
        const prices = products.map(p => p.price)
        const min = Math.floor(Math.min(...prices))
        const max = Math.ceil(Math.max(...prices))
        setMinPrice(min)
        setMaxPrice(max)
        setPriceRange([min, max])
      } catch (err) {
        setError(axios.isAxiosError(err) ? err.message : 'Failed to load products')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts = allProducts.filter(({ category, price, brand }) => {
    const withinCategory = selectedCategories.length === 0 || selectedCategories.includes(category)
    const withinBrand = selectedBrands.length === 0 || selectedBrands.includes(brand)
    const withinPrice = price >= priceRange[0] && price <= priceRange[1]
    return withinCategory && withinBrand && withinPrice
  })

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleSliderChange = (_: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      setIsFilterChanging(true)
      setPriceRange([value[0], value[1]])
      setCurrentPage(1)
      setTimeout(() => setIsFilterChanging(false), 300)
    }
  }

  const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value
    setIsFilterChanging(true)
    setSelectedCategories(typeof value === 'string' ? value.split(',') : value)
    setCurrentPage(1)
    setTimeout(() => setIsFilterChanging(false), 300)
  }

  const handleBrandChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value
    setIsFilterChanging(true)
    setSelectedBrands(typeof value === 'string' ? value.split(',') : value)
    setCurrentPage(1)
    setTimeout(() => setIsFilterChanging(false), 300)
  }

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setIsFilterChanging(true)
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => setIsFilterChanging(false), 300)
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
        <aside className='product-filter-panel' style={{ transition: 'all 0.3s ease' }}>
          <div className='filter-group'>
            <FormControl fullWidth size='small'>
              <InputLabel id='category-filter-label' className='filter-select-label'>
                Shop by Category
              </InputLabel>
              <Select
                labelId='category-filter-label'
                id='category-filter'
                multiple
                value={selectedCategories}
                label='Shop by Category'
                onChange={handleCategoryChange}
                renderValue={(selected) => selected.length === 0 ? 'All Categories' : selected.join(', ')}
              >
                {categoryOptions.map((category) => (
                  <MenuItem key={category} value={category}>
                    <Checkbox checked={selectedCategories.indexOf(category) > -1} />
                    <ListItemText primary={category} />
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
                multiple
                value={selectedBrands}
                label='Brand'
                onChange={handleBrandChange}
                renderValue={(selected) => selected.length === 0 ? 'All Brands' : selected.join(', ')}
              >
                {brandOptions.map((brand) => (
                  <MenuItem key={brand} value={brand}>
                    <Checkbox checked={selectedBrands.indexOf(brand) > -1} />
                    <ListItemText primary={brand} />
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
                min={minPrice}
                max={maxPrice}
                valueLabelDisplay='auto'
                getAriaLabel={() => 'Price range'}
                step={5}
              />
            </div>
          </div>
        </aside>

        <div className='product-list-container'>
          {loading && <p className='text-center mt-10'>Loading products...</p>}
          {error && <p className='text-center mt-10 text-red-500'>Error: {error}</p>}

          {!loading && !error && (
            <>
              <div 
                className='product-list-page flex flex-wrap'
                style={{
                  opacity: isFilterChanging ? 0.3 : 1,
                  transform: isFilterChanging ? 'scale(0.98)' : 'scale(1)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  pointerEvents: isFilterChanging ? 'none' : 'auto'
                }}
              >
                {paginatedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className='product-item'
                    role='button'
                    tabIndex={0}
                    onClick={() => handleProductClick(product)}
                    onKeyDown={(event) => handleProductKeyDown(event, product)}
                    aria-label={`View details for ${product.title}`}
                    style={{
                      animation: `fadeInUp 0.4s ease forwards ${index * 0.05}s`,
                      opacity: 0
                    }}
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

                {paginatedProducts.length === 0 && (
                  <div className='no-results' style={{ animation: 'fadeIn 0.3s ease' }}>
                    <p>No products match the selected filters.</p>
                  </div>
                )}
              </div>

              {totalPages > 1 && (
                <div 
                  className='pagination-wrapper' 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '2rem', 
                    marginBottom: '2rem',
                    opacity: isFilterChanging ? 0.5 : 1,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color='primary'
                    size='large'
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className='brand-div p-20'>
        <Container>
          <BrandCarousel />
        </Container>
      </div>
      <ProductPreviewModal product={previewProduct} onClose={handleModalClose} />
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .product-item {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .product-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }

          .filter-group {
            transition: all 0.3s ease;
          }

          .filter-group:hover {
            transform: translateX(3px);
          }
        `}
      </style>
    </section>
  )
}

type ProductPreviewModalProps = {
  product: Product | null
  onClose: () => void
}

function ProductPreviewModal({ product, onClose }: ProductPreviewModalProps): ReactElement | null {
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
                <img
              src={gallery[activeIndex]}
              alt={`${product.title} view ${activeIndex + 1}`}
              className='product-gallery-image'
            />
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
      </DialogContent>
    </Dialog>
  )
}
