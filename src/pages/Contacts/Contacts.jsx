import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <Box maxWidth="500px" margin="0 auto">
      <Heading as="h1" size="xl" marginY="2rem">
        Phonebook
      </Heading>
      <ContactForm />
      <Heading as="h2" size="lg" marginY="2rem">
        Contacts
      </Heading>
      <Filter />
      <ContactList />
    </Box>
  );
};

export default ContactsPage;
