import { ButtonNext, ButtonPrev } from './ButtonActions'
import Item from './Item'
import Pagination from './Pagination'
import './Pagination.css'
import { usePagination } from './usePagination'

const PaginationRoot = () => {
  const {
    setTodosPerPage,
    visibleTodos,
    prevPageHandler,
    nextPageHandler,
    currentPage,
    handlerCurrentPage,
    pages
  } = usePagination()

  return (
    <>
      <select onChange={(e) => setTodosPerPage(+e.target.value)}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
      </select>
      <div>
        <Item {...{ visibleTodos }} />
        <ButtonPrev onClick={prevPageHandler} />
        <Pagination
          {...{
            pages,
            currentPage,
            handlerCurrentPage
          }}
        />
        <ButtonNext onClick={nextPageHandler} />
      </div>
    </>
  )
}

export default PaginationRoot
