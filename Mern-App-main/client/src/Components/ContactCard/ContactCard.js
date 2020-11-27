import React from 'react'
import Delete from '../../Assets/delete.png'
import './ContactCard.css'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../Redux/Actions/Actions'
import EditModalContact from '../Modal/Modal'

const ContactCard = ({ contact, name, lastName, phone, email, setName, setLastName, setPhone, setEmail }) => {

  const dispatch = useDispatch()

  return (
    <div className="contact-card">
      <h3>{contact.name}</h3>
      <span>{contact.lastName}</span>
      <span>{contact.phone}</span>
      <span>{contact.email}</span>
      <div className="delete-edit-btns">
        <img src={Delete}
          alt="delete-icon"
          onClick={() => dispatch(deleteContact(contact._id))}
        />
        <EditModalContact edit={true} contact={contact}
          name={contact.name} setName={setName}
          lastName={contact.lastName} setLastName={setLastName}
          phone={contact.phone} setPhone={setPhone}
          email={contact.email} setEmail={setEmail}
        />
      </div>
    </div>
  )
}

export default ContactCard