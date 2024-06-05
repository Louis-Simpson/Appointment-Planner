import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";


export const ContactsPage = ({ contacts, addToContacts }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);
  

  // Check for duplicate names when contacts or name change
  useEffect(() => {
    if (contacts.some(contact => contact.name === name)){
    setDuplicate(true);
    }
  }, [contacts, name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!duplicate) {
      // Add contact info and clear data
      addToContacts(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div>
      <section>
        <h2>
          Add Contact
          { duplicate ? "Name already added" : "" }
      </h2> 
        <ContactForm name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};