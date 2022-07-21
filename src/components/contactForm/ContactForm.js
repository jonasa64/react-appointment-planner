import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        placeholder="Enter name"
      />
      <input
        type="text"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="Enter phone"
        required
        pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
      />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        placeholder="Enter email"
      />
      <button type="submit">Add new contact</button>
    </form>
  );
};
