import React, { useEffect, useState } from 'react';
import { fetchAllChildren } from '../ApiService/fetchRequest';
import Child from './Child';
import Pagination from './Pagination';

const Dashboard = () => {
  const [children, setChildren] = useState([]);
  const [childrenPerPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const loadChildren = async () => {
    setLoading(true);
    const res = await fetchAllChildren();
    setChildren(res.children);
    setLoading(false);
  };

  useEffect(() => {
    loadChildren();
  }, [currentPage]);

  // list current children
  const indexOfLastChild = currentPage * childrenPerPage;
  const indexOfFirstChild = indexOfLastChild - childrenPerPage;
  const currentChildren = children.slice(indexOfFirstChild, indexOfLastChild);

  // chage page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="h-screen flex flex-col justify-between py-28">
      <h1 className="text-3xl">Kids</h1>

      {currentChildren.map((child) => (
        <Child key={child.childId} child={child} loading={loading} />
      ))}
      <Pagination
        className="mt-4"
        paginate={paginate}
        childrenPerPage={childrenPerPage}
        totalChildren={children.length}
      />
    </div>
  );
};

export default Dashboard;
