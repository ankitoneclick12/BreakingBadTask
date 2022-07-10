import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors, NavigationType} from '../constants';
import HomeScreen from '../Screens/HomeScreen';
import {StatusBar, Text, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CharacterDetailScreen from '../Screens/CharacterDetail';
import SearchScreen from '../Screens/SearchScreen';
import FavouriteScreen from '../Screens/FavouriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  const navigationRef = useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor={'black'} />
      <HomeStack.Navigator>
        <HomeStack.Screen
          name={NavigationType.HOME_SCREEN}
          component={HomeScreen}
          options={{
            animation: 'slide_from_bottom',
            animationTypeForReplace: 'push',
            headerTitle: 'The Breaking Bad',
            headerStyle: {
              backgroundColor: '#070707',
            },
            headerTitleStyle: {
              color: '#FFFFFF',
              fontFamily: 'Roboto-Bold',
              fontSize: 22,
            },

            headerRight: () => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Feather
                      onPress={() =>
                        navigationRef.current.navigate(
                          NavigationType.SEARCH_SCREEN,
                        )
                      }
                      name="search"
                      size={20}
                      color={'#fff'}
                    />
                  </View>
                  <View>
                    <FontAwesome
                      onPress={() =>
                        navigationRef.current.navigate(
                          NavigationType.FAVOURITE_SCREEN,
                        )
                      }
                      name="heart"
                      style={{
                        marginLeft: 26,
                      }}
                      size={20}
                      color={'#18CA75'}
                    />
                  </View>
                </View>
              );
            },
          }}
        />
        <HomeStack.Screen
          name={NavigationType.CHARACTER_DETAIL}
          component={CharacterDetailScreen}
          options={{
            headerShown: false,
            animation: 'slide_from_bottom',
            animationTypeForReplace: 'push',
          }}
        />
        <HomeStack.Screen
          name={NavigationType.SEARCH_SCREEN}
          component={SearchScreen}
          options={{
            headerShown: false,
            animation: 'slide_from_bottom',
            animationTypeForReplace: 'push',
          }}
        />

        <HomeStack.Screen
          name={NavigationType.FAVOURITE_SCREEN}
          component={FavouriteScreen}
          options={{
            headerTitle: 'Favourite',
            headerStyle: {
              backgroundColor: '#070707',
            },
            headerTitleStyle: {
              color: colors.white,
              fontFamily: 'Roboto-Bold',
              fontSize: 22,
            },
            animation: 'slide_from_bottom',
            animationTypeForReplace: 'push',
            headerLeft: () => <View />,
            headerRight: () => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Ionicons
                      name={'close'}
                      onPress={() => navigationRef.current.goBack()}
                      color={colors.white}
                      size={22}
                    />
                  </View>
                </View>
              );
            },
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;
