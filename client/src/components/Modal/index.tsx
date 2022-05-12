import { Modal } from "react-bootstrap";

type Props = {
    showMoal: boolean,
    handleModalHide: () => void,
    children: React.ReactNode,
    title: string,
}

const ModalComponent = ({ showMoal, handleModalHide, title, children }: Props) => {
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

        </Modal>
    )
}

export default ModalComponent