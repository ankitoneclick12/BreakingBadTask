import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {actionTypes} from '../../constants';

const FavouriteScreenLogic = () => {
  const dispatch = useDispatch();
  const charactersData = useSelector(state => state.characters);
  const [favouriteCharacterList, setFavouriteCharacterList] = useState([]);

  useEffect(() => {
    const tempFavourite = charactersData.filter(
      charData => charData.fav == true,
    );
    setFavouriteCharacterList(tempFavourite);
  }, []);

  const addToFavouriteHandler = item => {
    dispatch({
      type: actionTypes.ADD_TO_FAVOURITE,
      payload: {
        char_id: item.char_id,
      },
    });
  };

  const removeFavouriteHandler = item => {
    dispatch({
      type: actionTypes.REMOVE_FAVOURITE,
      payload: {
        char_id: item.char_id,
      },
    });

    const tempArray = favouriteCharacterList.filter(
      charData => charData.char_id != item.char_id,
    );
    setFavouriteCharacterList(tempArray);
  };

  return {
    charactersData,
    addToFavouriteHandler,
    removeFavouriteHandler,
    favouriteCharacterList,
  };
};

export default FavouriteScreenLogic;
