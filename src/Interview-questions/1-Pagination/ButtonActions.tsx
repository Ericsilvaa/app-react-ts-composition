interface ButtonRootProps {
  onClick: () => void
}

const ButtonPrev = ({ onClick }: ButtonRootProps) => {
  return <span onClick={onClick}>Prev</span>
}

const ButtonNext = ({ onClick }: ButtonRootProps) => {
  return <span onClick={onClick}>Next</span>
}

export { ButtonNext, ButtonPrev }
