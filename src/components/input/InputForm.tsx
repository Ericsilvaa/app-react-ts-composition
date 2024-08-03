import { useRef } from 'react'
import { InputFormProps } from '../../types/components/TInput'
import './InputForm.css'

const InputForm = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  required
}: InputFormProps) => {
  const inputRef = useRef(null)

  return (
    <div className='input-form-container'>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        ref={inputRef}
      />
    </div>
  )
}

export default InputForm
