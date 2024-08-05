import { createContext, useContext, useState } from 'react'

interface SelectGroupContextData {
  category: string
  setCategory: (category: string) => void
  maxPrice: number
  setMaxPrice: (maxPrice: number) => void
}

const SelectGroupContext = createContext<SelectGroupContextData>(
  {} as SelectGroupContextData
)

const SelectGroup = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState('first')
  const [maxPrice, setMaxPrice] = useState(100)

  return (
    <SelectGroupContext.Provider
      value={{ category, setCategory, maxPrice, setMaxPrice }}
    >
      {children}
    </SelectGroupContext.Provider>
  )
}

const CategorySelect = () => {
  const { category, setCategory } = useContext(SelectGroupContext)

  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value='first'>First</option>
      <option value='second'>Second</option>
      <option value='third'>Third</option>
    </select>
  )
}

const PriceSelect = () => {
  const { maxPrice, setMaxPrice } = useContext(SelectGroupContext)

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (!value) return

    setMaxPrice(parseInt(value))
  }

  return (
    <select value={maxPrice} onChange={handleOnChange}>
      <option value='100'>100</option>
      <option value='500'>500</option>
      <option value='1000'>1000</option>
    </select>
  )
}

// Adicionando os subcomponentes ao componente pai
SelectGroup.CategorySelect = CategorySelect
SelectGroup.PriceSelect = PriceSelect

export default SelectGroup
