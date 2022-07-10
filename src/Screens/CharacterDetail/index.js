import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import CharacterDetailLogic from './CharacterDetail.logic';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../constants';

const CharacterDetailScreen = ({route, navigation}) => {
  const characterDetail = route?.params?.characterDetail;
  const {
    otherCharacter,
    addToFavouriteHandler,
    removeFavouriteHandler,
    isFavourite,
    setISFavourite,
    setOtherCharacter,
  } = CharacterDetailLogic(characterDetail);

  const renderCharaters = ({item, index}) => {
    return (
      <View activeOpacity={0.6} style={[styles.characterListView]}>
        <Image
          source={{
            uri: item.img,
          }}
          style={{
            overflow: 'hidden',
            borderRadius: 8,
            width: '100%',
            height: '80%',
          }}
          resizeMode="contain"
        />
        <View
          style={[
            styles.centerRowStyle,
            {
              marginTop: 12,
              paddingHorizontal: 5,
            },
          ]}>
          <Text style={[styles.nameTextStyle]}>{item.name}</Text>
          {item?.fav == true ? (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => removeFavouriteHandler(item)}>
              <FontAwesome name="heart" size={20} color={'#18CA75'} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => addToFavouriteHandler(item)}>
              <Feather
                name="heart"
                size={20}
                color={'#3d3d3d'}
                selectionColor="white"
              />
            </TouchableOpacity>
          )}
        </View>
        <Text
          style={[
            styles.nickNameStyle,
            {
              paddingHorizontal: 5,
            },
          ]}>
          {item.nickname}
        </Text>
      </View>
    );
  };

  const renderAppearance = ({item, index}) => {
    return (
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 5,
          backgroundColor: '#1A1A1A',
          marginRight: index == characterDetail?.appearance.length - 1 ? 45 : 8,
          borderRadius: 3,
        }}>
        <Text
          style={{
            // marginTop: 6,
            fontSize: 14,
            color: 'white',
            fontWeight: '300',
            fontFamily: 'Roboto-Regular',
            textAlign: 'center',
          }}>
          {`Season ${item}`}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.topContainer]}>
      <ScrollView>
        <ImageBackground
          style={{
            height: Dimensions.get('window').height / 1.6,
            width: Dimensions.get('window').width,
          }}
          resizeMode="stretch"
          source={{uri: characterDetail?.img}}>
          <View style={[styles.blackShadowView]}>
            <View style={[styles.headerTabStyle]}>
              <Feather
                name="arrow-left"
                color={'white'}
                size={22}
                onPress={() => navigation.goBack()}
              />
              {isFavourite == true ? (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => removeFavouriteHandler(characterDetail)}>
                  <FontAwesome name="heart" size={20} color={colors.green} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => addToFavouriteHandler(characterDetail)}>
                  <Feather name="heart" size={20} color={colors.color3d3d3d} />
                </TouchableOpacity>
              )}
            </View>
            <Image
              source={{uri: characterDetail.img}}
              style={[styles.imageStyle]}
              resizeMode="cover"
            />
            <Text
              style={[
                styles.boldTextStyle,
                {
                  width: '100%',
                  textAlign: 'center',
                  marginTop: 28,
                },
              ]}>
              {characterDetail.name}
            </Text>
            <Text style={[styles.nickNameStyle]}>
              {characterDetail.nickname}
            </Text>
            <Text
              style={[
                styles.mediumTextStyle,
                {
                  marginTop: 6,
                  color: colors.pink,
                },
              ]}>
              {characterDetail.status}
            </Text>
          </View>
        </ImageBackground>

        <View style={{paddingHorizontal: 23, paddingTop: 18}}>
          <Text style={[styles.mediumTextStyle]}>Potrayed</Text>
          <View style={[styles.centerRowStyle]}>
            <Text style={[styles.detailTextStyle]}>
              {characterDetail.portrayed}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={[
                  styles.detailTextStyle,
                  {
                    marginRight: 12,
                  },
                ]}>
                {characterDetail.birthday}
              </Text>
              <Feather name="gift" color={colors.white} size={13} />
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 23, marginTop: 40}}>
          <Text style={styles.mediumTextStyle}>Occupation</Text>
          {characterDetail?.occupation.map(occData => {
            return (
              <Text
                style={[
                  styles.detailTextStyle,
                  {
                    marginTop: 6,
                  },
                ]}>
                {occData}
              </Text>
            );
          })}
        </View>
        <View style={{marginTop: 40}}>
          <Text
            style={[
              styles.mediumTextStyle,
              {
                paddingHorizontal: 23,
              },
            ]}>
            Appeared in
          </Text>
          <FlatList
            style={{
              paddingLeft: 23,
              marginTop: 16,
            }}
            data={characterDetail?.appearance}
            horizontal
            renderItem={renderAppearance}
          />
        </View>
        <View style={{marginTop: 80, marginBottom: 60, paddingHorizontal: 23}}>
          <Text
            style={[
              styles.boldTextStyle,
              {
                fontSize: 23,
              },
            ]}>
            Other characters
          </Text>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={otherCharacter}
            horizontal
            style={{marginTop: 7, marginBottom: 12}}
            renderItem={renderCharaters}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {flex: 1, backgroundColor: colors.black},
  blackShadowView: {
    backgroundColor: '#00000095',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '1%',
    elevation: 120,
  },
  headerTabStyle: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    alignItems: 'center',
    top: 28,
    position: 'absolute',
  },
  imageStyle: {
    width: 172,
    height: 220,
    overflow: 'hidden',
    borderRadius: 10,
  },
  boldTextStyle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 28,
    color: 'white',
  },
  nickNameStyle: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Roboto-Thin',
  },
  mediumTextStyle: {
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    color: colors.green,
  },
  centerRowStyle: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailTextStyle: {
    fontSize: 14,
    color: 'white',
    fontWeight: '300',
    fontFamily: 'Roboto-Regular',
  },
  characterListView: {
    height: 250,
    width: 200,
    marginTop: 45,
    marginHorizontal: 8,
    paddingHorizontal: 6,
  },
  nameTextStyle: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    flex: 1,
  },
});

export default CharacterDetailScreen;
