const baseURL = 'https://tryfamly.co/api';
const { REACT_APP_ACCESS_TOKEN } = process.env;

const fetchAllChildren = async () => {
  const res = await fetch(
    'https://tryfamly.co/api/daycare/tablet/group?accessToken=234ffdb8-0889-4be3-b096-97ab1679752c&groupId=11fc220c-ebba-4e55-9346-cd1eed714620&institutionId=fb6c8114-387e-4051-8cf7-4e388a77b673',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return res.json();
};

// const checkInChild = (childId) => {};

// const checkOutChild = (childId) => {};

module.exports = { fetchAllChildren };
