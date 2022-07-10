import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {colors} from '../../constants';

const CharacterDetailScreen = ({route, navigation}) => {
  return <SafeAreaView style={[styles.topContainer]}></SafeAreaView>;
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    color: colors.black,
  },
});

export default CharacterDetailScreen;
