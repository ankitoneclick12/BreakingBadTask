import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {actionTypes, BASE_URL} from '../../constants';

const SearchScreenLogic = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const searchedCharacters = useSelector(state => state.searchedCharacter);
  const [isStartSearch, setIsStartSearch] = useState(false);

  const searchCharacterByName = text => {
    fetch(`${BASE_URL}api/characters?name=${text}`, {
      method: 'GET',
    }).then(async response => {
      const res = JSON.parse(await response.text());
      const newResponse = res.map(charData => {
        return {
          ...charData,
          fav: false,
        };
      });
      setIsStartSearch(true);
      dispatch({
        type: actionTypes.SEARCH_CHARACTER,
        payload: {
          characters: newResponse,
        },
      });
    });
  };

  const removeSearchList = () => {
    dispatch({
      type: actionTypes.REMOVE_SEARCH_CHARACTER,
    });
  };

  return {
    searchText,
    searchedCharacters,
    setSearchText,
    searchCharacterByName,
    removeSearchList,
    isStartSearch,
    setIsStartSearch,
  };
};

export default SearchScreenLogic;
