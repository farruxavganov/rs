import Item from './Item';
import Pagination from './Pagination';

interface Props {
  children?: React.ReactNode;
  results?: object[];
  paginationArray: number[];
  handleSubmit(value: string, pageNumber: string): void;
}

const Items: React.FC<Props> = ({ results, paginationArray, handleSubmit }) => {
  return (
    <>
      <ul>
        {results &&
          results.map((item, index) => (
            <li key={index}>
              <Item item={item} />
            </li>
          ))}
      </ul>
      <div>
        <Pagination
          paginationArray={paginationArray}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default Items;
