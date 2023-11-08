const ListF = (props) => {
  return (
    <ul>
      {props.items.map((v) => <li>{v}</li>)}
    </ul>
  );
};

export default ListF;