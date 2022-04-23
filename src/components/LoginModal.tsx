import { SignIn } from '../utils/Firebase';
import { Modal, Button } from 'react-bootstrap';

export function LoginModal(props: { show: boolean, setShow: (show: boolean) => void }) {
    // create a modal window to log in with
    return (
        <>
            <Modal show={props.show}>
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignIn/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.setShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
