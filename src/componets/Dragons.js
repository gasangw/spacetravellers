import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchingDragonsApi } from '../redux/dragons';

function Dragon() {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingDragonsApi());
  }, [dispatch]);
  const render = dragons.map((dragon) => (
    <div key={dragon.id}>
      <p>
        {' '}
        {dragon.id}
      </p>
      <p>
        {' '}
        {dragon.dragon_name}
      </p>
      <span>
        {dragon.reserved && (
          <button type="button">
            Reserved
          </button>
        )}
      </span>
      <p>
        {' '}
        {dragon.description}
      </p>
      <img src={dragon.flickr_image} alt="flick" />
      {!dragon.reserved && (
        <button id={dragon.id} type="button">
          RESERVE
        </button>
      )}
      {dragon.reserved && (
        <button id={dragon.id} type="button">
          CANCEL
        </button>
      )}
    </div>
  ));
  return (
    <div>
      {render}
    </div>
  );
}

export default Dragon;