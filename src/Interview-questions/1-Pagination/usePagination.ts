import React from 'react'
import { TodoType } from './types'

export const usePagination = () => {
  const [todos, setTodos] = React.useState<TodoType[]>([])
  const [todosPerPage, setTodosPerPage] = React.useState(10)
  const [currentPage, setCurrentPage] = React.useState(1)

  const numOfTotalPages = Math.ceil(todos.length / todosPerPage)
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1)

  const indexOfLastTodo = currentPage * todosPerPage
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage

  const visibleTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo)

  const handlerCurrentPage = (page: number) => {
    setCurrentPage(page)
  }

  const prevPageHandler = () => {
    if (currentPage !== numOfTotalPages) {
      console.log('prevPageHandler', currentPage)
      setCurrentPage((prev) => {
        if (prev > 1) {
          return prev - 1
        }
        return prev
      })
    }
  }

  const nextPageHandler = () => {
    if (currentPage !== numOfTotalPages) {
      console.log('prevPageHandler', currentPage)
      setCurrentPage((prev) => {
        if (prev < numOfTotalPages + 1) {
          return prev + 1
        }
        return prev
      })
    }
  }

  React.useEffect(() => {
    if (todos.length > 0) return

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTodos(json))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    setTodos,
    setTodosPerPage,
    visibleTodos,
    prevPageHandler,
    nextPageHandler,
    handlerCurrentPage,
    pages,
    currentPage
  }
}
