import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Profile = () => {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      <p>this is Profile</p>
      <Link to="/create-playlist">Back</Link>
    </div>
  );
};

export default Profile;
