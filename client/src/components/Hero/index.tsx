import { useState } from "react";
import {
    HeaderContainer,
    Heading,
    MainContainer,
    SubHeading
} from "./styles";
import { Container } from "react-bootstrap";
import Button from "../Button"
import AuthModal from "../AuthModal";

const Hero = () => {
    const [showSignUpModal, setShowSignupModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

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

                    <AuthModal
                        showModal={showSignUpModal}
                        closeModal={closeModal}
                        title="Sign up"
                        signUpFlow={true}
                    />


                    <span className="mx-3">
                        <Button
                            title={'Login'}
                            onClick={openLoginModal}
                            primary
                        />
                    </span>

                    <AuthModal
                        showModal={showLoginModal}
                        closeModal={closeModal}
                        title="Login"
                    />

                </HeaderContainer>
            </Container>
        </MainContainer>
    )
};

export default Hero;