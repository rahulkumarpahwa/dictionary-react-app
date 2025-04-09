import PropTypes from 'prop-types';

const SearchBar = ({ inputElement, onSearchButton }) => {
  return (
    <div className="flex items-center space-x-4">
      <input
        ref={inputElement}
        type="text"
        placeholder="Search for a word..."
        className="border rounded-lg px-4 py-2 w-64"
      />
      <button
        onClick={onSearchButton}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  inputElement: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  onSearchButton: PropTypes.func.isRequired,
};

export default SearchBar;
