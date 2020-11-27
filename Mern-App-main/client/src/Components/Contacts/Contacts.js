import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getContacts } from '../../Redux/Actions/Actions'
import './Contacts.css'
import ContactCard from '../ContactCard/ContactCard'
import AddModalContact from '../Modal/Modal'

const Contacts = () => {

  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch()

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {
    dispatch(getContacts())
  }
    , [dispatch]);

  console.log(contacts)
  return (
    <div className='contacts-content' >
      <h1>Contacts page</h1>
      <p>Welcome, this is the Contacts page.</p>
      <div className="contacts-list">
        {contacts.map(contact => (
          <ContactCard contact={contact} key={contact._id}
            name={name} setName={setName}
            lastName={lastName} setLastName={setLastName}
            phone={phone} setPhone={setPhone}
            email={email} setEmail={setEmail}
          />
        ))}
        <div className="contact-card">
          <AddModalContact
            name={name} setName={setName}
            lastName={lastName} setLastName={setLastName}
            phone={phone} setPhone={setPhone}
            email={email} setEmail={setEmail}
            edit={false}
          />

        </div>
      </div>


    </div>
  )
}

export default Contacts
