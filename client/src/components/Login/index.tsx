import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Button from "../Button"
import ModalComponent from "../Modal";

type Props = {
    showModal: boolean,
    closeModal: () => void,
}

const Login = ({ showModal, closeModal }: Props) => {
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

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

    const handleCloseModal = () => {
        setValidated(false);
        setPassword("");
        setEmail("");
        setErrorMsg("");

        closeModal();
    }

    return (
        <ModalComponent
            showMoal={showModal}
            handleModalHide={handleCloseModal}
            title={"Login"}
        >
            <Form noValidate validated={validated} onSubmit={handleLogin}>
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
                            title={"Login"}
                            type="submit"
                        />
                    </Form.Group>
                </Row>
            </Form>
        </ModalComponent>
    )
};

export default Login;