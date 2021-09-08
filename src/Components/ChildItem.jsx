import React from 'react';

const ChildItem = ({ children, loading }) => {
  console.log(children);
  console.log(loading);
  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      {children.map((child) => (
        <div key={child.childId} className="border-2 m-2 bg-grey-200">
          {child.checkedIn ? <p>&#9989;</p> : <p>&#10062;</p>}
          {child.checkedIn.toString()} : {child.name.fullName}
        </div>
      ))}
    </>
  );
};

export default ChildItem;
