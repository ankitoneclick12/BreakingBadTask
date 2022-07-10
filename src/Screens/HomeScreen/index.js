import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {colors} from '../../constants';

const HomeScreen = ({route, navigation}) => {
  return (
    <SafeAreaView style={[styles.topContainer]}>
      {/* <Text>dsffd</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    color: colors.black,
  },
});

export default HomeScreen;
