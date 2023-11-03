const Item: React.FC = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.model}</p>
    </div>
  );
};

export default Item;
