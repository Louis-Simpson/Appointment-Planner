import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  name,
  contacts,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={name} 
        name="name"  
        placeholder="Appointment Name"
        required
        onChange={(e) => setTitle(e.target.value)}
         />
        <br />
        <ContactPicker value={contact} contacts={contactNames} name="contact" onChange={(e) => setContact(e.target.value)} />
        <br />
        <input 
        type="date" 
        value={date} 
        name="date" 
        placeholder="Appointment Date"
        required
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
       
         />
        <br />
        <input 
        type="time" 
        value={time} 
        name="time" 
        placeholder="Appointment Time"
        required
        onChange={(e) => setTime(e.target.value)}
        min={getTodayString()}
        
         />
        
        <br />
        <input type="submit" value="Add Appointment" />
      </form>
    </div>
  );
};
