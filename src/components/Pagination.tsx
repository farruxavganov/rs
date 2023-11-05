interface Props {
  paginationArray: number[];
  handleSubmit(value: string, pageNumber: string): void;
}

const Pagination: React.FC<Props> = ({ paginationArray, handleSubmit }) => {
  return (
    <>
      {paginationArray.map((num) => (
        <button onClick={() => handleSubmit('', String(num + 1))} key={num}>
          {num + 1}
        </button>
      ))}
    </>
  );
};

export default Pagination;
