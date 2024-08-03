import './records.css'

interface TableRowItemProps {
  children: JSX.Element | JSX.Element[]
  classNames?: string
}

export const TableRowItem = ({ children, classNames }: TableRowItemProps) => {
  const defaultClass = classNames ? classNames : ''

  return <tr className={defaultClass}>{children}</tr>
}
