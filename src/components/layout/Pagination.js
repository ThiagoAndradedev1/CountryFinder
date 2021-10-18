import React from "react";

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number}>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => paginate(number)}
              >
                {number}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
