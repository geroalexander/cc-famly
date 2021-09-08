import React, { useEffect, useState } from 'react';
import { fetchAllChildren } from '../ApiService/fetchRequest';
import ChildItem from './ChildItem';

const Dashboard = () => {
  const [children, setChildren] = useState([]);
  const [childPerPage, setChildPerPage] = useState(5);
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

  return (
    <div>
      <h1>Kids</h1>
      <ChildItem children={children} loading={loading}></ChildItem>
    </div>
  );
};

export default Dashboard;
