interface Props {
  item: {
    name?: string;
    model?: string;
  };
}

const Item: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.model}</p>
    </div>
  );
};

export default Item;
