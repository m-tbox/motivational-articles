import { useState } from "react";
import { HeaderContainer, Heading, MainContainer, SubHeading } from "./styles";
import { Container, Form, Row, Col } from "react-bootstrap";
import Button from "../Button"
import ModalComponent from "../Modal";

const Hero = () => {
    const [showSignUpModal, setShowSignupModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleSignup = (e: any) => {
        e.preventDefault();

        alert(3)
    }

    const handleLogin = (e: any) => {
        e.preventDefault();

        alert(1)
    }

    const openSignupModal = () => {
        setShowSignupModal(true);
    }

    const openLoginModal = () => {
        setShowLoginModal(true);
    }

    const closeModal = () => {
        setShowSignupModal(false);
        setShowLoginModal(false);
    }

    const renderModal = (show: boolean, title: string, onHideModal: () => void, handleAction: React.MouseEventHandler<HTMLButtonElement>) => (
        <ModalComponent
            showMoal={show}
            handleModalHide={onHideModal}
            title={title}
            handleAuthAction={handleAction}
        >
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" />
                    </Col>
                </Form.Group>
            </Form>
        </ModalComponent>
    )

    return (
        <MainContainer>
            <Container>
                <HeaderContainer>
                    <Heading>Feed your mind with the best</Heading>
                    <SubHeading>
                        Grow, learn, and become more successful by reading some of the top
                        article by highly reputable individuals
                    </SubHeading>

                    <Button
                        title={'Sign up'}
                        onClick={openSignupModal}
                    />

                    {renderModal(showSignUpModal, "Sign up" , closeModal, handleSignup)}

                    <Button
                        title={'Login'}
                        onClick={openLoginModal}
                        primary
                    />

                    {renderModal(showLoginModal, "Login" , closeModal, handleLogin)}

                </HeaderContainer>
            </Container>
        </MainContainer>
    )
};

export default Hero;