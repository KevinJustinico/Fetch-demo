import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../api/index.js';
import "../App.css";

const Card = ({ img, name, onClick }) => {
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    const fetchPokemonImage = async () => {
      const response = await axiosInstance.get(`/pokemon/${name}`);
      setImgUrl(response.data.sprites.front_default);
    };
    fetchPokemonImage();
  }, [name]);

  return (
    <div className="card-container shadow-xl w-70 h-48 rounded-md bg-slate-100 flex flex-col p-4 cursor-pointer m-4" onClick={onClick}>
      <div  className='card-image w-60 h-48' style={{ backgroundImage: `url(${img})` }}>
        <img className='img-details' src={imgUrl} alt={name} />
      </div>
      <div className='card-text'>
        <p>{name}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired, 
  onClick: PropTypes.func.isRequired,
};

export default Card;