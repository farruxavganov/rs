import { useState } from 'react';

interface Props {
  children?: React.ReactNode;
  handleSubmit(value: string, pageNumber: string): void;
}

const SearchBar: React.FC<Props> = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <header>
      <form>
        <input
          onChange={handleChange}
          type="search"
          placeholder="Search"
          name="search"
          value={inputValue}
        />
        <button onClick={() => handleSubmit(inputValue, '1')} type="button">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
