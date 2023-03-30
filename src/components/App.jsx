import { ContactForm } from "./ContactForm/ContactForm";
// import { useState, useEffect } from "react";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout";




export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //      const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts !== null) {
  //     const parsedContacts = JSON.parse(savedContacts);
  //     return parsedContacts;
  //   }
  //   return []; 
  // });
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])
  
 

  

//  const filterContact = (filter) => {
//    setFilter(filter);
//   }

//  const findContact = () => {
//  return contacts.filter((contacts) =>
//       contacts.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };



  
    return (
      <Layout>
        <GlobalStyle/>
        <h1>Phonebook</h1>
        <ContactForm  />

        <h2>Contacts</h2>
          <Filter  />
        <ContactList  />

      </Layout>
    )
  }

