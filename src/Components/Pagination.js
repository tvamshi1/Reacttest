import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const canShowPrevious = currentPage >1;
  const canShowNext = currentPage < totalPages;


  const getPageNumbers = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage === 1) {
      return [1, 2, 3];
    }

    if (currentPage === totalPages) {
      return [currentPage - 2, currentPage - 1, currentPage];
    }

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <div className="pagination">
         
         {canShowPrevious && (
        <button onClick={() => onPageChange(currentPage - 1)}>&lt;</button>
      )}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
      {canShowNext && (
        <button onClick={() => onPageChange(currentPage + 1)}>&gt;</button>
      )}
       
    </div>
  );
};

export default Pagination;
