import { Modal } from "react-bootstrap";
import Button from "../Button";

type Props = {
    showMoal: boolean,
    handleModalHide: () => void,
    handleAuthAction: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode,
    title: string,
}

const ModalComponent = ({ showMoal, handleModalHide, handleAuthAction, title, children }: Props) => {
    return (
        <Modal
            show={showMoal}
            onHide={handleModalHide}
            centered
        >
            <Modal.Header>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {children}
            </Modal.Body>

            <Modal.Footer>
                <Button
                    title={"Close"}
                    onClick={handleModalHide}
                />

                <Button
                    title={title}
                    onClick={handleAuthAction}
                    primary
                />

            </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent