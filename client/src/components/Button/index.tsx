import { Container } from "./styles"

type Props = {
  title: string,
  primary?: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = ({ title, onClick, primary }: Props) => {
  return (
    <Container
      onClick={onClick}
      primary={primary}
    >
      {title}
    </Container>
  )
}

export default Button