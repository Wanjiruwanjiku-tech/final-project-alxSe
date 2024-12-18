import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/styles/styles.css';

const Search = () => {
  // Sample data for search
  const data = [
    { id: 1, name: 'Cardiac Emergency', link: '/cardiac'},
    { id: 2, name: 'Fracture Management', link: '/fractures'},
    { id: 3, name: 'Burns', link: './burns' },
    { id: 4, name: 'Diabetic Emergency', link: '/diabetic-emergencies' },
    { id: 5, name: 'Shock Management', link: '/bleeding-and-shock' }
  ];

  // State to store search input and filtered results
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Function to handle input change and filter data
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setSearchTerm(searchQuery);

    // Only filter when there is a search term
    if (searchQuery !== '') {
      const results = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery)
      );
      setFilteredData(results);
    } else {
      setFilteredData([]);  // Clear the filtered data if search is empty
    }
  };

  return (
    <div className='search-bar'>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for an emergency..."
      />
      <button onClick={handleSearch} className='search-button'>Search</button>
      {/* Conditionally show filtered results only if searchTerm is not empty */}
      {searchTerm && (
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <li key={item.id} ><Link to={item.link}>{item.name}</Link></li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;