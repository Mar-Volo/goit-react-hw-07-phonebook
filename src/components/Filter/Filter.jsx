import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';
import { FilterContact } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const searchContact = (e) => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <FilterContact
        type="text"
        name="filter"
        placeholder="Search contact"
        onChange={searchContact}
      />
    </div>
  );
};

