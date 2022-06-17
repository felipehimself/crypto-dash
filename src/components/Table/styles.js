import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
  width: 850px;
  padding: 0 1.5rem;
  background-color: #293143;
  border-radius: 0.5rem;
  min-height: 460px;
  overflow: auto;
`;

export const PlaceHolder = styled.div`
  padding: 0.5rem 0;
`;

export const Table = styled.table`
  background-color: #293143;
  color: #fff;
  margin: 0 auto;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0 15px;
`;

export const Th = styled.th`
  border-bottom: 2px solid #1d2330;
  border-top: 2px solid #1d2330;
  font-size: 1.4rem;
  font-weight: normal;
  padding: 1.3rem 2rem;
  text-align: center;
`;

export const Td = styled.td`
  padding: 1.3rem 2rem;

  :nth-child(1) {
    text-align: center;
    font-size: 1.5rem;
    font-weight: normal;
    opacity: 0.5;
  }

  :nth-child(2) {
    text-align: center;
  }

  :nth-child(3) {
    text-align: center;
  }

  :last-child {
    width: 15rem;
  }

  &.today {
    position: relative;
  }

  &.td_icon {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }

  &.today.down::before {
    content: '';
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-top: 0;
    border-top: 8px solid #ed6b5f;
    position: absolute;
    left: 5px;
    top: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
  }

  &.today.down {
    color: #ed6b5f;
  }

  &.today.up::before {
    content: '';
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-top: 0;
    border-bottom: 8px solid #28c36d;
    position: absolute;
    left: 5px;
    top: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
  }

  &.today.up {
    color: #28c36d;
  }
`;

export const Tr = styled.tr`
  font-size: 1.6rem;
  font-weight: normal;
  border-bottom: 1px solid #1d2330;
  transition: all 0.3s ease;

  :hover {
    background-color: #343e56;
  }
`;

export const Img = styled.img`
  height: 22px;
`;

export const Thead = styled.thead`
  ${Tr}:hover {
    background-color: #293143;
  }
`;

export const Tbody = styled.tbody``;

export const CoinNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CoinName = styled.span`
  font-size: 1.2rem;
  color: #5b6a86;
`;


export const Span = styled.span``