import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ModalComponent(props) {

  const {title,bodyModal,isVisibleModal,handleCloseModal} = props;

  return (
              <Modal show={isVisibleModal} onHide={handleCloseModal} size="sm">
                  <Modal.Header closeButton>
                      <Modal.Title>{title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {bodyModal}
                  </Modal.Body>
              </Modal>
  )
}
