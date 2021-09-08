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

const checkInChild = async (childId) => {
  const options = {
    accessToken: REACT_APP_ACCESS_TOKEN,
    pickupTime: '22:00',
  };

  const res = await fetch(
    `https://tryfamly.co/api/v2/children/${childId}/checkins`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    }
  );
  return res.json();
};

const checkOutChild = async (childId) => {
  const options = {
    accessToken: REACT_APP_ACCESS_TOKEN,
  };

  const res = await fetch(
    `https://tryfamly.co/api/v2/children/${childId}/checkout`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    }
  );
  return res.json();
};

module.exports = { fetchAllChildren, checkInChild, checkOutChild };
