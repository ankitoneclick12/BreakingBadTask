import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants';

const EmptyListComponent = ({}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.thinTextStyle}>No character found</Text>
      <Text
        style={[
          styles.thinTextStyle,
          {
            color: colors.white,
          },
        ]}>
        Try again
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderWidth: 2,
    paddingVertical: 52,
    paddingHorizontal: 24,
  },
  thinTextStyle: {
    fontSize: 24,
    fontFamily: 'Roboto-Thin',
    color: colors.green,
  },
});

export default EmptyListComponent;
