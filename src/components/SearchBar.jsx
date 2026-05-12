const SearchBar = ({ city, setCity }) => {
  return (
    <div>
      <input
        className="form-control mt-4 mb-4"
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
