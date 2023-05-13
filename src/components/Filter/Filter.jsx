import { useDispatch, useSelector } from 'react-redux';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { filterContact } from 'redux/filter/filterCounterSlice';
import { selectFilter } from 'redux/filter/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleChangeFilter = evt => {
    const value = evt.target.value;
    dispatch(filterContact(value));
  };

  return (
    <FormControl>
      <FormLabel fontSize="20px" fontWeight="600">
        Find contacts by name
      </FormLabel>
      <Input
        type="text"
        name="filter"
        required
        value={filter}
        onChange={handleChangeFilter}
      />
    </FormControl>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
