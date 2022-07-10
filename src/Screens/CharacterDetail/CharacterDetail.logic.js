import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {actionTypes} from '../../constants';

const CharacterDetailLogic = char_data => {
  const dispatch = useDispatch();
  const charactersData = useSelector(state => state.characters);
  const [otherCharacter, setOtherCharacter] = useState([]);
  const [isFavourite, setISFavourite] = useState(char_data?.fav);
  useEffect(() => {
    let filteredData = charactersData.filter(
      character => character.char_id != char_data?.char_id,
    );
    setOtherCharacter(filteredData);
  }, []);

  const addToFavouriteHandler = item => {
    setISFavourite(true);
    dispatch({
      type: actionTypes.ADD_TO_FAVOURITE,
      payload: {
        char_id: item.char_id,
      },
    });
  };

  const removeFavouriteHandler = item => {
    setISFavourite(false);
    dispatch({
      type: actionTypes.REMOVE_FAVOURITE,
      payload: {
        char_id: item.char_id,
      },
    });
  };

  return {
    otherCharacter,
    setOtherCharacter,
    removeFavouriteHandler,
    addToFavouriteHandler,
    isFavourite,
    setISFavourite,
    // characterDetail,
  };
};

export default CharacterDetailLogic;
