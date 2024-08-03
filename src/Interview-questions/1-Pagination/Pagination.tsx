interface PaginationProps {
  pages: number[]
  currentPage: number
  handlerCurrentPage: (page: number) => void
}

const Pagination = ({
  pages,
  currentPage,
  handlerCurrentPage
}: PaginationProps) => {
  return (
    <>
      {pages.map((page) => (
        <span
          key={page}
          onClick={() => handlerCurrentPage(page)}
          className={currentPage === page ? 'active' : ''}
        >{`${page} |`}</span>
      ))}
    </>
  )
}

export default Pagination
