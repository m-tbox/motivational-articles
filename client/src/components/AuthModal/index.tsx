import { useState, useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { callSignupApi, callLoginApi } from "../../services/api";
import Button from "../Button"
import { ErrorMessage } from "./styles";
import ModalComponent from "../Modal";
import { UserContext } from "../../context";
import axios from "axios";

type Props = {
    showModal: boolean,
    signUpFlow?: boolean,
    closeModal: () => void,
    title: string
}

const AuthModal = ({ showModal, closeModal, title, signUpFlow }: Props) => {
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [localErrorMsg, setLocalErrorMsg] = useState("");
    const [formSubmitErrorMsg, setFormSubmitErrorMsg] = useState("");

    const [state, setState] = useContext(UserContext);

    const navigate = useNavigate();



    const handleSubmit = async (event: any) => {
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
            let apiResponse;

            if (signUpFlow) {
                let signupResponse = await callSignupApi({ email, password });
                apiResponse = signupResponse;
            }
            else {
                let loginResponse = await callLoginApi({ email, password });
                apiResponse = loginResponse;
            }

            if (apiResponse?.errors?.length) {
                setFormSubmitErrorMsg(apiResponse.errors[0].msg);
                setValidated(true);
                return;
            }

            setState({
                data: {
                    id: apiResponse?.data?.user.id,
                    email: apiResponse?.data?.user.email,
                },
                loading: false,
                error: null
            });

            localStorage.setItem("token", apiResponse?.data?.token);
            axios.defaults.headers.common["authorization"] = `Bearer ${apiResponse?.data?.token}`
            navigate("/articles")
        }

        setValidated(true);
    }

    const handleCloseModal = () => {
        setValidated(false);
        setPassword("");
        setEmail("");
        setLocalErrorMsg("");
        setFormSubmitErrorMsg("");

        closeModal();
    }

    return (
        <ModalComponent
            showMoal={showModal}
            handleModalHide={handleCloseModal}
            title={title}
        >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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

                        {
                            signUpFlow ?
                                <Form.Control
                                    required
                                    type="password"
                                    minLength={6}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                :
                                <Form.Control
                                    required
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                        }
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
                            title={title}
                            type="submit"
                        />
                    </Form.Group>
                </Row>
            </Form>
        </ModalComponent>
    )
};

export default AuthModal;