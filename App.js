import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Event from './components/Event';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Averta-Bold': require('./assets/fonts/Averta-Bold.ttf'),
    'Averta-Regular': require('./assets/fonts/Averta-Regular.ttf'),
    'Averta-Light': require('./assets/fonts/Averta-Light.otf'),
  });

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Navbar />
      <View style={styles.container}>
        <Event
          backgroundImage={require('./assets/Buffalos.jpeg')}
          title={'Colorado Buffaloes Football vs. Stanford Cardinal Football'} 
          subtitle={'Fri, Oct 8, 8pm • Folsom Field Stadium'} 
        />
      </View>
      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
});
