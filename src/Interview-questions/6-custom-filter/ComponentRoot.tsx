import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { fetchProducts } from './api/products'
import ProductList from './components/ProductList'
import ProductListFilters from './components/ProductListFilters'
import Title from './components/title/Title'
import { ProductFilters } from './types/product'

const queryClient = new QueryClient()

const Layout = () => {
  const [search, setSearch] = useState<ProductFilters['search']>()
  const [category, setCategory] = useState<ProductFilters['category']>()
  const [maxPrice, setMaxPrice] = useState<ProductFilters['maxPrice']>()

  const { data, isFetching } = useQuery({
    queryKey: ['products', { category, maxPrice, search }],
    queryFn: () => fetchProducts({ category, maxPrice, search })
  })

  const handleFiltersChange = useCallback((filters: ProductFilters) => {
    setCategory(filters.category)
    setMaxPrice(filters.maxPrice)
    setSearch(filters.search)
  }, [])

  return (
    <div className='flex flex-col gap-2'>
      <Title />
      <ProductListFilters onChange={handleFiltersChange} />
      <div>
        {data && <ProductList products={data} />}
        {isFetching && <p>Loading...</p>}
      </div>
    </div>
  )
}

const ComponentRootCustomFilter = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  )
}

export default ComponentRootCustomFilter
