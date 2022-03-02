import Table from './components/Table';
import Buttons from './components/Buttons';
import useGetData from './hooks/getData';
import { Bars } from 'react-loading-icons';
import styled from 'styled-components';
const App = () => {
  const { isLoading } = useGetData();

  if (isLoading) return <Bars />;

  return (
    <Wrapper>
      <h1>Crypto Dash</h1>
      <Table />
      <Buttons />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  h1 {
    font-size: 3rem;
    text-align: center;
    color: #f5f5f5;
    padding: 1.5rem 0;
  }
`;

export default App;
