import { Formik } from 'formik';
import { Button, ErrorMessage, Field, Form, FormField } from './ContactForm.styled';
// import { nanoid } from 'nanoid';
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addContact } from 'redux/contactsSlice';

function validateName(value) {
   let error;
   if (!value) {
     error = 'Required';
   } else if (!/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)) {
     error = 'Invalid name';
   }
   return error;
 }
 
 function validateNumber(value) {
   let error;
   if (!value) {
     error = 'Required';
   } else if (!/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(value)) {
     error = 'Invalid number';
   }
   return error;
 }

export const ContactForm = () => {
  const dispatch = useDispatch();

    return (
    <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={(values, actions) => {
        dispatch(addContact(values));
          actions.resetForm();
          console.log(values)
            }}>
    {({ errors, touched }) => {
          return (
            <Form>
              <FormField>
                Name
                <Field name="name" type="text" validate={validateName} />
                {errors.name && touched.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              </FormField>
              <FormField>
                Number
                <Field name="number" type="tel" validate={validateNumber} />
                {errors.number && touched.number && <ErrorMessage>{errors.number}</ErrorMessage>}
              </FormField>

              <Button type="submit">Add contact</Button>
            </Form>
          );
        }}
    </Formik>
  )
}

