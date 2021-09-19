import React from 'react';
import { getPagesArray } from '../../../utils/pages';
const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArrays = getPagesArray(totalPages);

  return (
    <div className="page__wrapper">
      {pagesArrays.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page == p ? 'page-active' : 'page'}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
