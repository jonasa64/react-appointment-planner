import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("da-DK")
      .split("/");
    return `${day.padStart(2, "0")}-${month.padStart(2, "0")}-${year}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="enter title"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        min={getTodayString}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        required
      />
      <ContactPicker
        name="contact"
        value={contact}
        contacts={getContactNames()}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Appointment With"
      />
      <button type="submit">Add new appointment</button>
    </form>
  );
};
