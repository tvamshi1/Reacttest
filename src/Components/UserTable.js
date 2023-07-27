import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
// import Search from './Search';

const UserTable = ({ dataSource,pageSize  }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const [filteredData, setFilteredData] = useState([]);
  // const [selectedColumn, setSelectedColumn] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get(dataSource)
      .then((response) => {
        setData(response.data);
        setTotalPages(Math.ceil(response.data.length / pageSize));
        // setFilteredData(response.data );
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [dataSource,pageSize]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  };
  // const handleSearch = (column, query) => {
  //  const filtered = data.filter((item) => item[column].toString().toLowerCase().includes(query.toLowerCase()));
  //  setFilteredData(filtered);
  //   setSelectedColumn(column);
  // setSearchQuery(query);
  //   setCurrentPage(1); 
  // };
  // console.log(data[0])
  return (
    <div>
          {/* <Search
        columns={Object.keys(data[0]).map(([key]) => ({ key,label:key}))}
        onSearch={handleSearch}
      />  */}
    <div className="data-table-container">    
      <div className="table-row header-row">
        {data.length > 0 &&
          Object.keys(data[0]).map((header) => (
            <div className="table-header" key={header}>
              {header}
            </div>
          ))}
      </div>

      
      {getPaginatedData().map((item, index) => (
        <div className="table-row" key={index}>
          {Object.values(item).map((value, index) => (
            <div className="table-cell" key={index}>
              {value}
            </div>
          ))}
        </div>
      ))}


    </div>
    <div><Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={onPageChange}
  /></div>
  </div>
  );
};

export default UserTable;
