import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FavouriteScreenLogic from './FavouriteScreen.logic';
import CharacterList from '../../components/CharactersList';
import {colors} from '../../constants';

const FavouriteScreen = ({route, navigation}) => {
  const {
    addToFavouriteHandler,
    removeFavouriteHandler,
    favouriteCharacterList,
  } = FavouriteScreenLogic();

  return (
    <SafeAreaView style={styles.topContainer}>
      <FlatList
        data={favouriteCharacterList}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{flexGrow: 1}}
        style={{marginTop: 7, marginBottom: 12}}
        renderItem={({item, index}) => {
          return (
            <CharacterList
              index={index}
              item={item}
              navigation={navigation}
              removeFavouriteHandler={removeFavouriteHandler}
              isFavouriteScreen={true}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
});

export default FavouriteScreen;
