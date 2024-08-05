import './button.css'
import { CustomButtonProps } from './types'

const CustomButton = ({
  onClick,
  children,
  classNames,
  type
}: CustomButtonProps) => {
  const defaultClassNames = classNames ? classNames : 'button blue mobile'

  const typeButton = type ? type : 'button'

  return (
    <button
      type={typeButton}
      className={`${defaultClassNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CustomButton
