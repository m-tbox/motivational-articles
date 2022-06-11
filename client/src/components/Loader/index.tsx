import React from 'react'
import { Container, Image } from './styles'

type Props = {}

const Loader = (props: Props) => {
    return (
        <Container>
            <Image src={"/Loading_icon.gif"} alt="Loading" />
        </Container>
    )
}

export default Loader