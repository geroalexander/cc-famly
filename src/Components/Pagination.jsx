import React from 'react';

const Pagination = ({ childrenPerPage, totalChildren }) => {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(totalChildren / childrenPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="flex flex-row">
        {pageNumbers.map((number) => (
          <div key={number}>
            <a href="!#">{number}</a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
