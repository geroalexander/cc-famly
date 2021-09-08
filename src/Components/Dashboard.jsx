import React, { useEffect, useState } from 'react';
import { fetchAllChildren } from '../ApiService/fetchRequest';
import ChildItem from './ChildItem';
import Pagination from './Pagination';

const Dashboard = () => {
  const [children, setChildren] = useState([]);
  const [childrenPerPage, setChildrenPerPage] = useState(5);
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
  }, []);

  const indexOfLastChild = currentPage * childrenPerPage;
  const indexOfFirstChild = indexOfLastChild - childrenPerPage;
  const currentChildren = children.slice(indexOfFirstChild, indexOfLastChild);

  return (
    <div>
      <h1 className="text-3xl">Kids</h1>
      <ChildItem children={currentChildren} loading={loading}></ChildItem>
      <Pagination
        childrenPerPage={childrenPerPage}
        totalChildren={children.length}
      />
    </div>
  );
};

export default Dashboard;
