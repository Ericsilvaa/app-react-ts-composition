import { TodoType } from './types'

const Item = ({ visibleTodos }: { visibleTodos: TodoType[] }) => {
  return (
    <>
      {visibleTodos.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))}
    </>
  )
}

export default Item
