import React, { useState } from 'react';

const Search = ({ columns, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColumn, setSelectedColumn] = useState(columns[0]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value, selectedColumn);
  };

  const handleColumnChange = (e) => {
    setSelectedColumn(e.target.value);
    onSearch(searchQuery, e.target.value);
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <select value={selectedColumn} onChange={handleColumnChange}>
        {columns.map((column, index) => (
          <option key={index} value={column}>
            {column}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Search;
