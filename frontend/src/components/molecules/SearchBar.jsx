import Input from '../atoms/Input';

const SearchBar = ({ value, onChange, placeholder }) => (
  <div>
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default SearchBar;
