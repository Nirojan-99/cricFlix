import React from 'react';
import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Avatar} from '@rneui/base';

//navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import HomeScreen from './Screens/HomeScreen';
import FixturesScreen from './Screens/FixturesScreen';
import NFTStoreScreen from './Screens/NFTStoreScreen';
import SearchScreen from './Screens/SearchScreen';
import MenuScreen from './Screens/MenuScreen';

//icons
import {
  HomeIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  BuildingStorefrontIcon,
  Bars3Icon,
} from 'react-native-heroicons/solid';

const App = () => {
  //hooks
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route, navigation}) => ({
          tabBarLabel: route.name,
          tabBarIcon: ({focused, color, size}) => {
            switch (route.name) {
              case 'Home':
                return <HomeIcon color={color} size={22} />;
                break;
              case 'Fixtures':
                return <CalendarIcon color={color} size={22} />;
                break;
              case 'NFT':
                return <BuildingStorefrontIcon color={color} size={22} />;
                break;
              case 'Search':
                return <MagnifyingGlassIcon color={color} size={22} />;
                break;
              case 'Menu':
                return <Bars3Icon color={color} size={25} />;
                break;
              default:
                return null;
                break;
            }
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: '#001038',
          tabBarInactiveBackgroundColor: '#001038',
          headerRight: () => {
            return (
              <View style={{marginRight: 10}}>
                <TouchableOpacity
                  onPress={() => navigation.jumpTo('Home')}
                  activeOpacity={0.5}>
                  <Avatar
                    rounded
                    size={40}
                    source={{
                      uri: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          },
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.jumpTo('Home')}
              style={{marginLeft: 3}}>
              <Image
                style={{width: 120, height: 50, resizeMode: 'contain'}}
                source={require('./assets/logo.png')}
              />
            </TouchableOpacity>
          ),
          title: '',
          headerStyle: {backgroundColor: '#031952'},
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          // options={{tabBarBadge: 3}}
        />
        <Tab.Screen
          name="Fixtures"
          component={FixturesScreen}
          initialParams={{live: false}}
        />
        <Tab.Screen name="NFT" component={NFTStoreScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
