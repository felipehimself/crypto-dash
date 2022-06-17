import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../../features/dadosSlice';
import * as Style from './styles';

const Buttons = () => {
  const data = useSelector((state) => state.arrToChunks.value);
  const page = useSelector((state) => state.arrToChunks.page);
  const dispatch = useDispatch();

  
  return (
    <Style.Container>
      {data.map((_, index) => {
        return (
          <Style.Button
            key={index}
            className={index === page ? 'btn active' : 'btn'}
            onClick={() => dispatch(changePage(index))}
          >
            {index + 1}
          </Style.Button>
        );
      })}
    </Style.Container>
  );
};

export default Buttons;
