import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
// import PropTypes from "prop-types";
import { getContacts, getFilter } from "redux/selectors";


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filterName = useSelector(getFilter);
    const getVisibleContacts = () => {
        if (filterName !== "") {
           return contacts.filter((contact => contact.name.toLowerCase().includes(filterName.toLowerCase())));
        }
    }
    const visibleContacts = getVisibleContacts();
    

    return (
        <ul>
            {filterName === "" && contacts.map(contact => (<Contact contact={contact} key={contact.id} />))}
            {filterName !== "" && visibleContacts.map(contact => (<Contact contact={contact} key={contact.id} />))} 
      </ul>
  )  
}

// ContactList.propTypes = {
//     // contacts: PropTypes.array.isRequired,
//     // onDelete: PropTypes.func.isRequired,
// }
