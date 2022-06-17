import React from 'react';
import millify from 'millify';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { useSelector } from 'react-redux';
import useGetData from '../../hooks/getData';
import * as Style from './styles';

const Table = () => {
  const { arrs, isLoading } = useGetData();
  const pag = useSelector((state) => state.arrToChunks.page);

  if (isLoading) return;

  return (
    !isLoading && (
      <Style.Main>
        <Style.PlaceHolder>&nbsp;</Style.PlaceHolder>
        <Style.Table>
          <Style.Thead>
            <Style.Tr>
              <Style.Th>Rank #</Style.Th>
              <Style.Th>Coin</Style.Th>
              <Style.Th>Market Cap</Style.Th>
              <Style.Th>Volume 24h</Style.Th>
              <Style.Th>Today</Style.Th>
              <Style.Th>Price</Style.Th>
              <Style.Th>Monthly</Style.Th>
            </Style.Tr>
          </Style.Thead>
          <Style.Tbody>
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
                <Style.Tr>
                  <Style.Td>{rank}</Style.Td>
                  <Style.Td className='td_icon'>
                    <Style.Img src={iconUrl} alt={name} />{' '}
                    <Style.CoinNameContainer className='coin-name-container'>
                      <Style.Span>{symbol}</Style.Span>
                      <Style.CoinName className='coin-name-container__name'>
                        {name.length > 8 ? `${name.substring(0, 9)}...` : name}
                      </Style.CoinName>
                    </Style.CoinNameContainer>
                  </Style.Td>
                  <Style.Td>USD {millify(marketCap)}</Style.Td>
                  <Style.Td>{millify(Number(item['24hVolume']))}</Style.Td>
                  <Style.Td
                    className={
                      change.startsWith('-') ? 'today down' : 'today up'
                    }
                  >
                    {change}%
                  </Style.Td>
                  <Style.Td>USD {millify(price)}</Style.Td>
                  <Style.Td>
                    <Sparklines data={[...sparkline]} height={60}>
                      <SparklinesLine color='#00fffb' />
                    </Sparklines>
                  </Style.Td>
                </Style.Tr>
              );
            })}
          </Style.Tbody>
        </Style.Table>
      </Style.Main>
    )
  );
};

export default Table;
