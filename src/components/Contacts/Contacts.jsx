import { ThreeDots } from 'react-loader-spinner';
import { Contacts, Contact, DelButton } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactsList = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const findNameByFilter = () => {
    const filteredItems = items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredItems;
  };

  const deleteContactById = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Contacts>
      {isLoading && !error && (
        <ThreeDots
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ justifyContent: 'center' }}
          visible={true}
        />
      )}
      {error && <b>{error}</b>}
      {findNameByFilter().map(({ id, name, number }) => (
        <Contact key={id}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{name}</div>
            {number}
          </div>
          <DelButton
            type="button"
            onClick={() => deleteContactById(id)}
            variant="outline-danger"
          >
            Delete
          </DelButton>
        </Contact>
      ))}
    </Contacts>
  );
};
