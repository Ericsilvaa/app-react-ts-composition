import { usePagination } from './usePagination'

const SelectPorPage = () => {
  const { setTodosPerPage } = usePagination()
  return (
    <select onChange={(e) => setTodosPerPage(+e.target.value)}>
      <option value='10'>10</option>
      <option value='20'>20</option>
      <option value='30'>30</option>
    </select>
  )
}

export default SelectPorPage
