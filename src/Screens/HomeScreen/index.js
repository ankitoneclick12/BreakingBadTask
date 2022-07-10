import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {actionTypes, colors, NavigationType} from '../../constants';
import HomeScreenLogic from './HomeScreen.logic';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import CharacterList from '../../components/CharactersList';

const HomeScreen = ({route, navigation}) => {
  const {charactersData, addToFavouriteHandler, removeFavouriteHandler} =
    HomeScreenLogic();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <FlatList
        data={charactersData}
        numColumns={2}
        style={{marginTop: 7, marginBottom: 12}}
        renderItem={({item, index}) => {
          return (
            <CharacterList
              item={item}
              navigation={navigation}
              index={index}
              addToFavouriteHandler={addToFavouriteHandler}
              removeFavouriteHandler={removeFavouriteHandler}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
});

export default HomeScreen;
