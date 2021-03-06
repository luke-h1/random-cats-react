/* eslint-disable */
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 500px;
  height: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  img {
    width: 400px;
    height: 400px;
    margin: 0 0 1rem 0;
    border-radius: 10px;
  }
`;


export const Button = styled.button`
  color: #000;
  padding: 15px;
  border-radius: 8px;
  outline: 0;
  &:active { 
    transition: scale 0.5s ease;
    transform: scale(1.10);
  }
`

export const CatWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`
export const Error = styled.h1`
  color: red;
  text-align: center;
`