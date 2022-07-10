import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {actionTypes} from '../../constants';

const HomeScreenLogic = () => {
  const dispatch = useDispatch();
  const charactersData = useSelector(state => state.characters);

  useEffect(() => {
    getAllCharacters();
  }, []);

  const getAllCharacters = async () => {
    fetch('https://www.breakingbadapi.com/api/characters', {
      method: 'GET',
    }).then(async response => {
      const res = JSON.parse(await response.text());
      const newResponse = res.map(charData => {
        return {
          ...charData,
          fav: false,
        };
      });
      dispatch({
        type: actionTypes.GET_CHARACTERS,
        payload: {
          characters: newResponse,
        },
      });
    });
  };

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
  };

  return {
    charactersData,
    addToFavouriteHandler,
    removeFavouriteHandler,
    getAllCharacters,
  };
};

export default HomeScreenLogic;
