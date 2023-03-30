import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import { Button, Item } from "./Contact.styled";
// import PropTypes from "prop-types";

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id))

    return (
        <Item>
            <p>&#9742; {contact.text.name} {contact.text.number}</p>
            <Button type="button" onClick={handleDelete}>Delete</Button>
    </Item>
)
}

// Contact.propTypes = {
//     contact: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired, 
//         id: PropTypes.string.isRequired,
//     }).isRequired
// }