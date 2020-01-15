import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Modal from 'react-bootstrap/Modal'

const loaderModal = (props) => (

    <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>{props.message}</Modal.Title>
        </Modal.Header>

        <Modal.Body>             
            <>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="light" />
                <Spinner animation="grow" variant="dark" />
            </>
        </Modal.Body>
    </Modal.Dialog>
)

export default loaderModal;