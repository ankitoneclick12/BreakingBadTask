import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors, NavigationType} from '../constants';

const CharacterList = ({
  navigation,
  item,
  index,
  addToFavouriteHandler,
  removeFavouriteHandler,
}) => {
  console.log('image', item.img);
  return (
    <View style={[styles.topContainer]}>
      <TouchableOpacity
        style={{width: '100%', height: '90%'}}
        onPress={() =>
          navigation.navigate(NavigationType.CHARACTER_DETAIL, {
            characterDetail: item,
          })
        }
        activeOpacity={0.6}>
        <Image
          source={{
            uri: item.img,
          }}
          style={{
            overflow: 'hidden',
            borderRadius: 8,
            width: '100%',
            height: '100%',
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={[styles.titleViewStyle]}>
        <Text
          style={[
            styles.boldTextStyle,
            {
              flex: 1,
            },
          ]}>
          {item.name}
        </Text>
        {item?.fav == true ? (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => removeFavouriteHandler(item)}>
            <FontAwesome name="heart" size={20} color={colors.green} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => addToFavouriteHandler(item)}>
            <Feather name="heart" size={20} color={colors.color3d3d3d} />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.nickNameTextStyle}>{item.nickname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: 250,
    width: '46%',
    marginTop: 50,
    marginHorizontal: 8,
    paddingHorizontal: 6,
  },
  titleViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 12,
    paddingHorizontal: 5,
  },
  boldTextStyle: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  nickNameTextStyle: {
    paddingHorizontal: 5,
    fontSize: 14,
    color: 'white',
    fontFamily: 'Roboto-Thin',
  },
});

export default CharacterList;
