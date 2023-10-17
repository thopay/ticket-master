import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Navbar from "../components/Navbar";
import { Image, Dimensions } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import * as Haptics from "expo-haptics";

const ScreenHeight = Dimensions.get("window").height;

const Barcode = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <Navbar page={2} closedPress={() => navigation.goBack(null)} />
			<View style={styles.container}>
				<Image source={require("../assets/Buffalos.jpeg")} style={styles.backgroundImage} />
				<View style={styles.appleWallet}>
                    <TouchableOpacity
                        onPress={() =>
                            Haptics.impactAsync(
                                Haptics.ImpactFeedbackStyle.Heavy
                            )
                        }
                        activeOpacity={1}
                    >
                        <Image
                            style={styles.appleWalletImage}
                            source={require("../assets/appleWallet2.png")}
                        />
                    </TouchableOpacity>
                </View>
				<Text style={styles.descriptionHeader}>
                    GA FLR STANDING
                </Text>
			</View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
		height: "100%"
    },
	backgroundImage: {
		height: ScreenHeight - responsiveHeight(10.8),
		position: "absolute",
	},
	appleWalletImage: {
        height: 50,
        resizeMode: "contain",
    },
	descriptionHeader: {
		fontSize: 20,
		color: "#fff",
		marginTop: 20,
	}
});

export default Barcode;
