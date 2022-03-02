import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../features/dadosSlice';

const Buttons = () => {
  const dados = useSelector((state) => state.arrToChunks.value);
  const page = useSelector((state) => state.arrToChunks.page);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {dados.map((_, index) => {
        return (
          <button
            key={index}
            className={index === page ? 'btn active' : 'btn'}
            onClick={() => dispatch(changePage(index))}
          >
            {index + 1}
          </button>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.5rem;

  .btn {
    font-size: inherit;
    font-family: inherit;
    border: none;
    padding: 0.4rem 0.9rem;
    border-radius: 50%;
    cursor: pointer;
    background-color: #1d2330;
    color: #fff;
    transition: all 0.3s ease;
    outline: none;
  }

  .btn:hover {
    background-color: #343e56;
  }

  .btn.active {
    background-color: #343e56;
  }
`;
export default Buttons;
