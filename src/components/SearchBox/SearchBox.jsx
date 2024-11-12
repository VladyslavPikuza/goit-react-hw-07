import s from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => (
  <div className= {s.SearchBox}>
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default SearchBox;