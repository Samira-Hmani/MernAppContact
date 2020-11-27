import React from 'react'
import './Home.css'
import ContactsImage from '../../Assets/contacts-.png'

const Home = () => {
    return (
        <div className='home-content'>
            <h1>Home page</h1>
            <p>Welcome, this is the home page.</p>
            <p>In this workshop, we are going to create a Mern application grouping frontend and backend. In this application we will display a list of contacts from the database, we will add a new contact, delete and modify an old contact.</p>
            <img src={ContactsImage} alt="contacts" style={{ width: "600px" }} />
        </div>
    )
}

export default Home