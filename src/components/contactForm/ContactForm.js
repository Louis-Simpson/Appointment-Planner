import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} type="text" onChange={(e) => setName(e.target.value)} placeholder="Contact Name" required/>
        <br />
        <input value={phone} type="tel" onChange={(e) => setPhone(e.target.value)} pattern="(^1300\d{6}$)|(^1800|1900|1902\d{6}$)|(^0[2|3|7|8]{1}[0-9]{8}$)|(^13\d{4}$)|(^04\d{2,3}\d{6}$)
" placeholder="Contact Phone" required/>
        <br />
        <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Contact Email" required/>
        <br />
        <input type="submit" value="Add Contact" />
      </form>
    </div>
  );
};

