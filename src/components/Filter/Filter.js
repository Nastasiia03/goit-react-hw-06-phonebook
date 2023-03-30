import { useDispatch } from "react-redux";
import { FormField } from "components/ContactForm/ContactForm.styled"
import { Input } from "./Filter.styled"
// import PropTypes from "prop-types";

import { handleFilter } from "redux/filtersSlice";


export const Filter = () => {
const dispatch = useDispatch();
    
    
    const handleFilterChange = e => {
        dispatch(handleFilter(e.target.value));
        console.log(e.target.value);
    }
    
   

    return (
        <FormField>
            Find contacts by name
            <Input type="text"  onChange={handleFilterChange}></Input>
        </FormField>
    )
}

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onFind: PropTypes.func.isRequired,
// }