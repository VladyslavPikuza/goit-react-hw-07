
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';

const SearchBox = ({ value }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.SearchBox}>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={handleChange} />
      </label>
    </div>
  );
};

export default SearchBox;
