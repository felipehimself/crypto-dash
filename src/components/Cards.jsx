// import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import useGetData from '../hooks/getData';
const Cards = () => {
  // const { cards, isLoading } = useGetData();

  return (
    <Wrapper>
      {/* {!isLoading && (
        <div className='card'>
          <p>MARKET CAP</p>
        </div>
      )} */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 850px;
  margin: 5rem auto 2rem auto;
  display: flex;
  color: #868c8f;

  .card {
    background-color: #293143;
    height: 5rem;
    width: 15rem;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
  }
`;

export default Cards;
