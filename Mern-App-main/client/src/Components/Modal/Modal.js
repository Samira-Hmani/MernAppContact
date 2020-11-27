import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Edit from '../../Assets/edit.png'
import { addContact, editContact } from '../../Redux/Actions/Actions'

import './Modal.css'

const ContactModal = (
  { name, lastName, phone, email, setName, setLastName, setPhone, setEmail, edit, contact }
) => {
  const [show, setShow] = useState(false);
  const [nameTemp, setNameTemp] = useState(name);
  const [lastNameTemp, setLastNameTemp] = useState(lastName);
  const [phoneTemp, setPhoneTemp] = useState(phone);
  const [emailTemp, setEmailTemp] = useState(email);

  const dispatch = useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle Add
  const handleAdd = () => {
    dispatch(addContact({ name, lastName, phone, email }))
    handleClose()
    setName("")
    setLastName("")
    setPhone("")
    setEmail("")
  }


  // Handle Edit
  const handleEdit = () => {
    dispatch(editContact(contact._id, {
      name: nameTemp,
      lastName: lastNameTemp,
      phone: phoneTemp,
      email: emailTemp
    }))
    handleClose()
    edit = false
  }


  return (
    <>
      {edit ? <img src={Edit} alt="edit-icon" onClick={handleShow} />
        : <span className="text-add" onClick={handleShow}>[ + ]</span>}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{edit ? "Edit Contact" : "Add contact"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={edit ? null : "Enter name"}
              onChange={(e) => (edit ? setNameTemp(e.target.value) : setName(e.target.value))}
              value={edit ? nameTemp : name}
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>LastName</Form.Label>
            <Form.Control
              type="text"
              placeholder={edit ? null : "Enter lastName"}
              value={edit ? lastNameTemp : lastName}
              onChange={(e) => edit ? setLastNameTemp(e.target.value) : setLastName(e.target.value)}
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder={edit ? null : "Enter phone"}
              value={edit ? phoneTemp : phone}
              onChange={(e) => edit ? setPhoneTemp(e.target.value) : setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder={edit ? null : "Enter Email"}
              value={edit ? emailTemp : email}
              onChange={(e) => edit ? setEmailTemp(e.target.value) : setEmail(e.target.value)}
            />
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
                </Button>
          <Button variant="primary" onClick={edit ? handleEdit : handleAdd}>
            {edit ? "Edit Contact" : "Add contact"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactModal