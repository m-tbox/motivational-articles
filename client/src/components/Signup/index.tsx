import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { callSignupApi } from "../../services/api";
import Button from "../Button"
import { ErrorMessage } from "./styles";
import ModalComponent from "../Modal";

type Props = {
    showModal: boolean,
    closeModal: () => void,
}

const Signup = ({ showModal, closeModal }: Props) => {
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [localErrorMsg, setLocalErrorMsg] = useState("");
    const [formSubmitErrorMsg, setFormSubmitErrorMsg] = useState("");

    const handleSignup = async (event: any) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {

            if (!password) {
                setLocalErrorMsg("This field is mandatory");
            }
            else if (password.length < 6) {
                setLocalErrorMsg("Password length should be at least 6 character");
            }

            setPassword("");
            event.stopPropagation();
        }
        else {

            let signupResponse = await callSignupApi({ email, password });
            console.log('ssss', signupResponse);

            if (signupResponse?.errors?.length) {
                setFormSubmitErrorMsg(signupResponse.errors[0].msg);
                setValidated(true);
            }

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
            title={"Signup"}
        >
            <Form noValidate validated={validated} onSubmit={handleSignup}>
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
                            minLength={6}
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