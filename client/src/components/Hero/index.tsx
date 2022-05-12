import { useState } from "react";
import { HeaderContainer, Heading, MainContainer, SubHeading } from "./styles";
import { Container, Form, Row, Col } from "react-bootstrap";
import Button from "../Button"
import ModalComponent from "../Modal";

const Hero = () => {
    const [showSignUpModal, setShowSignupModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSignup = (event: any) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {

            if (!password) {
                setErrorMsg("This field is mandatory");
            }
            else if (password.length < 6) {
                setErrorMsg("Password length should be at least 6 character");
            }

            setPassword("");
            event.stopPropagation();
        }
        else {
            alert(3);
        }

        setValidated(true);
    }

    const handleLogin = (event: any) => {
        event.preventDefault();

        const form = event.currentTarget;

        
        if (form.checkValidity() === false) {
            if (!password) {
                setErrorMsg("This field is mandatory");
            }

            setPassword("");
            event.stopPropagation();

        }
        else {
            alert(1);
        }

        setValidated(true);
    }

    const openSignupModal = () => {
        setValidated(false);
        setShowSignupModal(true);
    }

    const openLoginModal = () => {
        setValidated(false);
        setShowLoginModal(true);
    }

    const closeModal = () => {
        setValidated(false);
        setShowSignupModal(false);
        setShowLoginModal(false);
    }

    const renderModal = (show: boolean, title: string, onHideModal: () => void, handleAction: any) => (
        <ModalComponent
            showMoal={show}
            handleModalHide={onHideModal}
            title={title}
        >
            <Form noValidate validated={validated} onSubmit={handleAction}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide valid email
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            minLength={6}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errorMsg}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} className="d-flex justify-content-end">
                        <Button
                            title={"Close"}
                            onClick={onHideModal}
                            type="button"
                        />
                        <Button
                            primary
                            title={title}
                            type="submit"
                        />
                    </Form.Group>
                </Row>
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

                    {renderModal(showSignUpModal, "Sign up", closeModal, handleSignup)}

                    <Button
                        title={'Login'}
                        onClick={openLoginModal}
                        primary
                    />

                    {renderModal(showLoginModal, "Login", closeModal, handleLogin)}

                </HeaderContainer>
            </Container>
        </MainContainer>
    )
};

export default Hero;