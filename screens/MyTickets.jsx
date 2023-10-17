import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import Ticket from "../components/Ticket";
import { Entypo } from "@expo/vector-icons";

const MyTickets = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <Navbar page={1} closedPress={() => navigation.goBack(null)} />
            <ScrollView
                style={{
                    backgroundColor: "#fff",
                }}
            >
                <View style={styles.container}>
                    <Ticket
                        backgroundImage={require("../assets/Buffalos.jpeg")}
                        title={
                            "Colorado Buffaloes Football vs. Stanford Cardinal Football"
                        }
                        subtitle={"Fri, Oct 8, 8pm • Folsom Field Stadium"}
                        onPress={() => navigation.navigate("My Tickets")}
						navigation={navigation}
                    />
                </View>
                {/* <Entypo name="dot-single" size={24} color="black" /> */}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "top",
    },
});

export default MyTickets;
