import React, { useState, useEffect } from 'react';
import { checkInChild, checkOutChild } from '../ApiService/fetchRequest';

const Child = ({ child, loading }) => {
  const [checkedIn, setCheckedIn] = useState(child.checkedIn);

  if (loading) return <h2>Loading...</h2>;

  const toggleCheckIn = async () => {
    if (checkedIn) {
      // check out child
      const res = await checkOutChild(child.childId);
      if (res.length && res[0].checkoutTime) setCheckedIn(false);
    } else {
      //check in child
      const res = await checkInChild(child.childId);
      if (res.checkinTime) setCheckedIn(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={toggleCheckIn}
        className={
          (checkedIn ? 'bg-green-200 ' : 'bg-gray-300 ') +
          'flex flex-col w-60 border-2 m-2 rounded-md justify-center p-3 transform hover:scale-95'
        }
      >
        <p>{child.name.fullName}</p>
      </div>
    </div>
  );
};

export default Child;
