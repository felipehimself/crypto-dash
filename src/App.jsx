import Table from './components/Table/Table';
import Buttons from './components/Buttons/Buttons';
import useGetData from './hooks/getData';
import { Bars } from 'react-loading-icons';
import GlobalStyles from './GlobalStyles/GlobalStyles';
import { H1 } from './components/shared/shared';

const App = () => {
  const { isLoading } = useGetData();

  if (isLoading) return <Bars />;

  return (
    <>
      <GlobalStyles />
      <H1>CRYPTO DASHBOARD</H1>
      <Table />
      <Buttons />
    </>
  );
};

export default App;
