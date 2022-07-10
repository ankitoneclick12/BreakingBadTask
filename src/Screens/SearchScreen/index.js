import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchScreenLogic from './SearchScreen.logic';
import {colors, NavigationType} from '../../constants';
import CharacterList from '../../components/CharactersList';
import EmptyListComponent from '../../components/EmptyListComponent';

const SearchScreen = ({navigation}) => {
  const {
    searchText,
    setSearchText,
    removeSearchList,
    searchedCharacters,
    searchCharacterByName,
    isStartSearch,
    setIsStartSearch,
  } = SearchScreenLogic();

  return (
    <SafeAreaView style={styles.topContainer}>
      <View style={[styles.headerViewStyle]}>
        <Feather
          name={'arrow-left'}
          onPress={() => {
            navigation.goBack();
            removeSearchList();
          }}
          color={colors.white}
          size={20}
        />
        <TextInput
          onSubmitEditing={() => searchCharacterByName(searchText)}
          value={searchText}
          returnKeyType="done"
          onChangeText={text => {
            setSearchText(text);
            setIsStartSearch(false);
          }}
          placeholder="Search here"
          placeholderTextColor={'white'}
          style={styles.textInputStyle}
        />
        <Ionicons
          name={'close'}
          onPress={() => {
            setSearchText('');
            removeSearchList();
          }}
          color={colors.white}
          size={22}
        />
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => {
          return (
            <>
              {searchText != '' &&
                isStartSearch == true &&
                searchedCharacters?.length == 0 && <EmptyListComponent />}
            </>
          );
        }}
        data={searchedCharacters}
        numColumns={2}
        style={{marginTop: 7, marginBottom: 12}}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        renderItem={({item, index}) => {
          return (
            <CharacterList item={item} navigation={navigation} index={index} />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {flex: 1, backgroundColor: colors.black},
  headerViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 86,
    backgroundColor: '#242424',
    paddingHorizontal: 23,
  },
  textInputStyle: {
    marginHorizontal: 12,
    flex: 1,
    fontSize: 28,
    fontFamily: 'Roboto-Thin',
    fontWeight: '100',
    color: 'white',
  },
});

export default SearchScreen;
