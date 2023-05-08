import React from 'react';
import {FlatCard} from '../../components';
import './Profile.css'

const Profile = () => {
  const handleThemeChange = () => {
    document.body.classList.toggle("theme-dark-green")
  }

  const style = {
    padding: "1rem",
    margin: "3rem"
  }
  
  
  return (
    <div className='page'>
      <button style={style}  onClick={handleThemeChange}>Theme Change</button>
    </div>
  );
}

export default Profile;
