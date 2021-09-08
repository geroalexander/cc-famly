import React from 'react';

const Pagination = ({ childrenPerPage, totalChildren, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalChildren / childrenPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="flex flex-row justify-center items-center">
        {pageNumbers.map((pageNumber) => (
          <a
            onClick={() => paginate(pageNumber)}
            href="!#"
            className="mx-0.5 p-2 h-11 w-11 border-2 rounded-md "
          >
            <div key={pageNumber}>{pageNumber}</div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
