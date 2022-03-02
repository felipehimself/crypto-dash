import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { arrToSubArrays } from '../utils/utils';
import { useGetCoinsQuery } from '../services/coinApi';

// slicers
import { arrToChunks, cardsInfo } from '../features/dadosSlice';

const useGetData = () => {
  const { data, isLoading } = useGetCoinsQuery();
//   const { data, error, isLoading } = useGetCoinsQuery();

  const dispatch = useDispatch();
  const arrs = useSelector((state) => state.arrToChunks.value);
  const cards = useSelector((state) => state.arrToChunks.cardInfo);
  
  useEffect(() => {
    if (isLoading) return;
    dispatch(arrToChunks(arrToSubArrays(data?.data?.coins, 6)));
    dispatch(cardsInfo(data?.data?.stats));
  }, [data, isLoading, dispatch]);

  return { arrs, cards, isLoading };
};

export default useGetData;
