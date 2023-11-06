import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Items from '../components/Items';

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState<number[]>([]);
  const [results, setResults] = useState<object[]>();
  const [searchValue] = useState(searchParams.get('search'));
  const [initSearch] = useState(searchValue ? searchValue : '');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getItems(initSearch);
  }, [initSearch]);

  const getItems = (value?: string, pageNumber: number = 1) => {
    setIsLoading(true);
    fetch(
      `https://swapi.dev/api/vehicles/${
        value
          ? '?search=' + value + '&page=' + pageNumber
          : '?page=' + pageNumber
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
        const pagination = Array.from(
          { length: Math.ceil(data.count / 10) },
          (_, index) => index
        );
        setPagination(pagination);
        setIsLoading(false);
      });
  };

  const handleSubmit = (value: string, pageNumber: string) => {
    setSearchParams({ search: value, page: pageNumber });
    getItems(value, +pageNumber);
  };
  return (
    <div className="container">
      <SearchBar handleSubmit={handleSubmit} />
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Items
          results={results}
          paginationArray={pagination}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Home;
