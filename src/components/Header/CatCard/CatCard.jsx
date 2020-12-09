/* eslint-disable react/prop-types */
import React from 'react';

const CatCard = ({ cat }) => (
  <>
    <img src={cat.file} alt="cat" />
  </>
);
export default CatCard;
