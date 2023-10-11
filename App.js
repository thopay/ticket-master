import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MyEvents from './screens/MyEvents';
import MyTickets from './screens/MyTickets';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Averta-Bold': require('./assets/fonts/Averta-Bold.ttf'),
    'Averta-Regular': require('./assets/fonts/Averta-Regular.ttf'),
    'Averta-Light': require('./assets/fonts/Averta-Light.otf'),
  });

  const Stack = createNativeStackNavigator();

  if(!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="My Events" component={MyEvents} />
          <Stack.Screen name="My Tickets" component={MyTickets} options={{
            presentation: 'transparentModal',
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

