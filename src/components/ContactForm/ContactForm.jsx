import { useState } from 'react';
// import { Form, Input } from './ContactForm.style';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/thunk';
import { selectContacts } from 'redux/contacts/selector';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = { name, number };
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      setName('');
      setNumber('');
      return;
    }
    dispatch(addContactThunk(newContact));
    setName('');
    setNumber('');
  };

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel fontSize="20px" fontWeight="600">
          Name:
        </FormLabel>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="20px" fontWeight="600">
          Number:
        </FormLabel>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </FormControl>
      <Button type="submit" colorScheme="blue" size="lg">
        Add contact
      </Button>
    </Box>
  );
}
