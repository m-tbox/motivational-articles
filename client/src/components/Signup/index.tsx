import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Button from "../Button"
import ModalComponent from "../Modal";

type Props = {
    showModal: boolean,
    closeModal: () => void,
}

const Signup = ({ showModal, closeModal }: Props) => {
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

    const handleCloseModal = () => {
        setValidated(false);
        setPassword("");
        setEmail("");
        setErrorMsg("");

        console.log(password, email, errorMsg, validated);

        closeModal();
    }

    return (
        <ModalComponent
            showMoal={showModal}
            handleModalHide={handleCloseModal}
            title={"Signup"}
        >
            <Form noValidate validated={validated} onSubmit={handleSignup}>
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
                            type="password"
                            minLength={6}
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
                            onClick={handleCloseModal}
                            type="button"
                        />
                        <Button
                            primary
                            title={"Signup"}
                            type="submit"
                        />
                    </Form.Group>
                </Row>
            </Form>
        </ModalComponent>
    )
};

export default Signup;