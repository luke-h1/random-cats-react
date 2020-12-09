import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Wrapper,
  Button,
  CatWrap,
  Error,
} from './FormElements';
import CatCard from '../CatCard/CatCard';

const Form = () => {
  const [cats, setCats] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError('');
    }, 2000);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const API_URL = 'https://aws.random.cat/meow';
      const res = await axios.get(API_URL);
      setCats(<CatCard cat={res.data.file} />);
      setLoading(false);
    } catch (e) {
      showError(e.message);
    }
  };
  const getMoreCatsForSomeReason = () => {
    setCats('');
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Wrapper>
        {loading ? <h1>Loading Cats...</h1> : null}
        <CatWrap>
          {cats || null}
        </CatWrap>
        {error ? <Error>{error}</Error> : null}
        <Button onClick={getMoreCatsForSomeReason}>Get more cats</Button>
      </Wrapper>
    </>
  );
};
export default Form;
