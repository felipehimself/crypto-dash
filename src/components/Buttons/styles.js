import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.5rem;
`;

export const Button = styled.button`
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

  :hover {
    background-color: #343e56;
  }

  &.active {
    background-color: #343e56;
  }
`;
