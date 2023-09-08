import React, { useState } from 'react';

import ReactPaginate from 'react-paginate';

export const Pagination = () => {
  //   const [customers, setCustomers] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [currentPage, setCurrentPage] = useState([]);
  //   const [customersPerPage, setCustomersPerPage] = useState(01);

  // useEffect(() => {
  //   const getCustomers = async () => {
  //     setLoading(true)
  //   }

  // }, [])

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
