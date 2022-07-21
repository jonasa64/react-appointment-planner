import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = ({ contacts, addContact }) => {
  /*
  State variables for 
  contact info and duplicate check
  */
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      const contact = {
        phone,
        name,
        email,
      };
      addContact(contact);
      setPhone("");
      setName("");
      setEmail("");
      setIsDuplicate(false);
    }
  };

  /*
Check for contact name in the 
  contacts array 
  */
  useEffect(() => {
    const duplicates = contacts.filter((el) => el.name === name);
    if (duplicates.length > 0) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
    }
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          phone={phone}
          email={email}
          name={name}
          setEmail={setEmail}
          setPhone={setPhone}
          setName={setName}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts} />
      </section>
    </div>
  );
};
