import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import Event from '../components/Event';

const MyEvents = ({ navigation }) => {
	return (
		<>
			<StatusBar barStyle="light-content" />
			<Navbar />
			<ScrollView style={
				{
					backgroundColor: '#ffffff',
				}
			}>
				<View style={styles.container}>
					<Event
						backgroundImage={require('../assets/Buffalos.jpeg')}
						title={'Colorado Buffaloes Football vs. Stanford Cardinal Football'} 
						subtitle={'Fri, Oct 8, 8pm • Folsom Field Stadium'} 
						onPress={() => navigation.navigate('My Tickets')}
					/>
				</View>
			</ScrollView>
			<BottomNav />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'top',
	},
});

export default MyEvents;