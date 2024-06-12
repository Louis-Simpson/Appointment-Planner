<<<<<<< HEAD
import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addToAppointments = (name, contact, date, time) => {
    setAppointments([
      ...appointments, 
      {
        name: name,
        contact: contact,
        date: date,
        time: time
      },
    ]);
  }

  const addToContacts = (name, phone, email) => {
    setContacts([
      ...contacts, 
      {
        name: name,
        phone: phone,
        email: email
      },
    ]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage  contacts={contacts} addToContacts={addToContacts} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={contacts} appointments={appointments} addToAppointments={addToAppointments} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 2f892c5b (Initialize project using Create React App)
