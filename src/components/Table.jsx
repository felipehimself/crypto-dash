import React from 'react';
import styled from 'styled-components';
import millify from 'millify';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { useSelector } from 'react-redux';
import useGetData from '../hooks/getData';

// TODO:
// incluir dados gerais no topo
// incluir botao prev e next
// incluir input para filtrar

const Table = () => {
  // const { data, error, isLoading } = useGetCoinsQuery();

  // const dispatch = useDispatch();

  // const arrs = useSelector((state) => state.arrToChunks.value);
  // const page = useSelector((state) => state.arrToChunks.page);
  // useEffect(() => {
  //   if (isLoading) return;

  //   dispatch(arrToChunks(arrToSubArrays(data?.data?.coins, 5)));
  // }, [data, isLoading, dispatch]);

  const { arrs, isLoading } = useGetData();
  const pag = useSelector((state) => state.arrToChunks.page);


  if (isLoading) return;
  return (
    !isLoading && (
      <Wrapper>
        <div className='space'>&nbsp;</div>
        <table>
          <thead>
            <tr>
              <th>Rank #</th>
              <th>Coin</th>
              <th>Market Cap</th>
              <th>Volume 24h</th>
              <th>Today</th>
              <th>Price</th>
              <th>Monthly</th>
            </tr>
          </thead>
          <tbody>
            {arrs[pag]?.map((item, index) => {
              const {
                symbol,
                name,
                price,
                rank,
                marketCap,
                iconUrl,
                change,
                sparkline,
              } = item;
              return (
                <tr key={index}>
                  <td>{rank}</td>
                  <td className='td_icon'>
                    <img src={iconUrl} alt={name} />{' '}
                    <div className='coin-name-container'>
                      <span className='coin-name-container__symbol'>
                        {symbol}
                      </span>
                      <span className='coin-name-container__name'>
                        {name.length > 8 ? `${name.substring(0, 9)}...` : name}
                      </span>
                    </div>
                  </td>
                  <td>USD {millify(marketCap)}</td>
                  <td>{millify(Number(item['24hVolume']))}</td>
                  <td
                    className={
                      change.startsWith('-') ? 'today down' : 'today up'
                    }
                  >
                    {change}%
                  </td>
                  <td>USD {millify(price)}</td>
                  <td>
                    <Sparklines data={[...sparkline]} height={60}>
                      <SparklinesLine color='#00fffb' />
                    </Sparklines>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Wrapper>
    )
  );
};

const Wrapper = styled.main`
  margin: 0 auto;
  width: 850px;
  padding: 0 1.5rem;
  background-color: #293143;
  border-radius: 0.5rem;
  min-height: 460px;

  .space {
    padding: 0.5rem 0;
  }

  table {
    background-color: #293143;
    color: #fff;
    margin: 0 auto;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0 15px;
  }

  th {
    border-bottom: 2px solid #1d2330;
    border-top: 2px solid #1d2330;
    font-size: 1.4rem;
    font-weight: normal;
    padding: 1.3rem 2rem;
    text-align: center;
  }

  tr {
    font-size: 1.6rem;
    font-weight: normal;
    border-bottom: 1px solid #1d2330;
    transition: all 0.3s ease;
  }

  tr td {
    padding: 1.3rem 2rem;
  }

  tr td img {
    height: 22px;
  }

  td:nth-child(1) {
    text-align: center;
    font-size: 1.5rem;
    font-weight: normal;
    opacity: 0.5;
  }

  td:nth-child(2) {
    text-align: center;
  }
  td:nth-child(3) {
    text-align: center;
  }

  td:last-child {
    width: 15rem;
  }

  tr .td_icon {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }

  tr:hover {
    background-color: #343e56;
  }

  thead tr:hover {
    background-color: #293143;
  }

  .today {
    position: relative;
  }

  .today.down::before {
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

  .today.down {
    color: #ed6b5f;
  }

  .today.up::before {
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

  .today.up {
    color: #28c36d;
  }

  .coin-name-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__name {
      font-size: 1.2rem;
      color: #5b6a86;
    }
  }
`;

export default Table;
