import { useDispatch, useSelector } from 'react-redux';
import { List } from './ContactList.style';
import { useEffect } from 'react';
import { selectFilter } from 'redux/filter/selector';
import { selectContacts, selectIsLoading } from 'redux/contacts/selector';
import { deleteContactThunk, fetchContactsThunk } from 'redux/contacts/thunk';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const getFilteredContacts = (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContact = getFilteredContacts(items, filter);

  return (
    <>
      {isLoading && (
        <div>
          <span>Loading...</span>
        </div>
      )}
      <List>
        {filteredContact.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}{' '}
              <button onClick={() => dispatch(deleteContactThunk(id))}>
                Delete
              </button>
            </li>
          );
        })}
      </List>
    </>
  );
};
