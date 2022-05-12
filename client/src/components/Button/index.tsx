import { Container } from "./styles"

type Props = {
  title: string,
  primary?: boolean,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = ({ title, onClick, primary, type }: Props) => {
  return (
    <Container
      onClick={onClick}
      primary={primary}
      type={type}
    >
      {title}
    </Container>
  )
}

export default Button