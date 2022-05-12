import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../Button"
import ModalComponent from "../Modal";

import { callLoginApi } from "../../services/api";
import { ErrorMessage } from "./styles";

type Props = {
    showModal: boolean,
    closeModal: () => void,
}

const Login = ({ showModal, closeModal }: Props) => {
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [localErrorMsg, setLocalErrorMsg] = useState("");
    const [formSubmitErrorMsg, setFormSubmitErrorMsg] = useState("");

    const navigate = useNavigate();
    
    const handleLogin = async (event: any) => {
        event.preventDefault();

        const form = event.currentTarget;


        if (form.checkValidity() === false) {
            if (!password) {
                setLocalErrorMsg("This field is mandatory");
            }

            setPassword("");
            event.stopPropagation();

        }
        else {
            let loginResponse = await callLoginApi({ email, password });
            console.log('ssss', loginResponse);

            if (loginResponse?.errors?.length) {
                setFormSubmitErrorMsg(loginResponse.errors[0].msg);
                setValidated(true);

                return;
            }

            localStorage.setItem("token", loginResponse?.data?.token);
            navigate("/articles")
        }

        setValidated(true);
    }

    const handleCloseModal = () => {
        setValidated(false);
        setPassword("");
        setEmail("");
        setLocalErrorMsg("");

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
                            value={email}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Form.Control.Feedback type="invalid">
                            {localErrorMsg}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {
                    formSubmitErrorMsg &&
                    <ErrorMessage>
                        {formSubmitErrorMsg}
                    </ErrorMessage>
                }

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