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
