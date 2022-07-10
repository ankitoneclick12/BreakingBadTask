import {actionTypes} from '../constants';

const initState = {
  characters: [],
  searchedCharacter: [],
};

const CharactersReducer = (state = initState, action) => {
  console.log('action', action.type);
  switch (action.type) {
    case actionTypes.GET_CHARACTERS: {
      return {
        ...state,
        characters: action.payload.characters,
      };
    }
    case actionTypes.ADD_TO_FAVOURITE: {
      let tempArray = [...state.characters];
      const char_id = action.payload.char_id;
      let findCharacterIndex = tempArray.findIndex(
        char_data => char_data.char_id == char_id,
      );
      if (findCharacterIndex > -1) {
        tempArray[findCharacterIndex].fav = true;
      }
      return {
        ...state,
        characters: tempArray,
      };
    }

    case actionTypes.REMOVE_FAVOURITE: {
      let tempArray = [...state.characters];
      const char_id = action.payload.char_id;
      let findCharacterIndex = tempArray.findIndex(
        char_data => char_data.char_id == char_id,
      );
      if (findCharacterIndex > -1) {
        tempArray[findCharacterIndex].fav = false;
      }
      return {
        ...state,
        characters: tempArray,
      };
    }

    case actionTypes.SEARCH_CHARACTER: {
      return {
        ...state,
        searchedCharacter: action.payload.characters,
      };
    }

    case actionTypes.REMOVE_SEARCH_CHARACTER: {
      return {
        ...state,
        searchedCharacter: [],
      };
    }

    default:
      return state;
  }
};

export default CharactersReducer;
