import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './image/3.png'; // import the image

function Home() {
  const navigate = useNavigate();
  const handleStartForFreeClick = () => {
    navigate('/createdpoll'); // Redirect to the admin page
  };

  return (
    <div className='backgroundcolor'>
      <div>
        <img src={backgroundImage} className='image6' alt="Logo" /> {/* Use imported image */}
      </div>
      <br />
      <br />
      <div>
        <button className='button' onClick={handleStartForFreeClick}>
          Admin Page
        </button>
      </div>
    </div>
  );
}

export default Home;
