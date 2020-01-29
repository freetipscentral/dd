import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const resultModal = (props) => {
    if(props.show) {
        return(
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Your Score</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><div>You scored {props.totalCorrectAnswers} out of {props.totalQuestions}</div></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.onCancel}>Try this Quiz Again</Button>
                    <Button variant="primary">Select New Quiz Quiz</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    } else {
        return null;
    }
}

export default resultModal;