const Filter = ({ value, onChangeFilter }) => {
  //   console.log(props);
  return (
    <label htmlFor="name">
      Find contacts by name
      <input name="name" id="name" value={value} onChange={onChangeFilter} />
    </label>
  );
};

export default Filter;
