import React, { useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from './(tabs)'; // Make sure this path is correct
import FreshDataPage from './FreshDataPage';
import TrendingDataPage from './TrendingDataPage';
import DetailPageKomen from './DetailKomenPage';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const screenOptions = {
  headerShown: false,
  cardStyleInterpolator: ({ current, layouts } : any) => {
    const translateX = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [layouts.screen.width, 0],
    });

    return {
      cardStyle: {
        transform: [{ translateX }],
      },
    };
  },
};

function HomeTabs() {
  const [tabsVisible, setTabsVisible] = useState(true);

  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
          tabBarStyle: { display: tabsVisible ? 'flex' : 'none' } // Control visibility of tabs
        }}
      >
        {() => <HomeScreen hideTabs={setTabsVisible} />}
      </Tab.Screen>
      <Tab.Screen 
        name="Fresh" 
        component={FreshDataPage} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="leaf" size={24} color={color} />,
          headerShown: false,
          tabBarStyle: { display: tabsVisible ? 'flex' : 'none' } // Control visibility of tabs
        }} 
      />
      <Tab.Screen 
        name="Trending" 
        component={TrendingDataPage} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="flame" size={24} color={color} />,
          headerShown: false,
          tabBarStyle: { display: tabsVisible ? 'flex' : 'none' } // Control visibility of tabs
        }} 
      />
    </Tab.Navigator>
  );
}

const RootLayout: React.FC = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme} independent={true}>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
          <Stack.Screen name="DetailKomenPage" component={DetailPageKomen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default RootLayout;
