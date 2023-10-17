import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";

const Navbar = ({ page = 0, closedPress = () => {} }) => {
    return (
        <View style={styles.navbar}>
            {(page == 1 || page == 2) && (
                <TouchableWithoutFeedback onPress={() => closedPress()}>
                    <AntDesign
                        name="close"
                        size={26}
                        color="white"
                        style={styles.icon}
                    />
                </TouchableWithoutFeedback>
            )}
            {(page == 0 || page == 1) && (
                <Text style={styles.title}>
                    {page != 2 && (page == 0 ? "My Events" : "My Tickets")}
                </Text>
            )}
            {page == 2 && (
                <View
                    style={{
                        maxWidth: "70%",
                        flex: 1,
                        left: -5,
                        flexDirection: "column",
                        alignItems: "left",
                        paddingBottom: 10,
                    }}
                >
                    <Text style={styles.ticketTitle}>
                        Colorado Buffaloes Football vs. Stanford Cardinal
                        Football
                    </Text>
                    <Text style={styles.ticketSubtitle}>
                        Fri, Oct 8, 8pm - Folsom Field Stadium
                    </Text>
                </View>
            )}
            <Text style={styles.help}>Help</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: responsiveHeight(10.8),
        backgroundColor: "#20262C",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingTop: 50,
    },
    title: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "Averta-Bold",
    },
    help: {
        color: "#FFFFFF",
        fontSize: 16,
        position: "absolute",
        fontWeight: "600",
        right: 25,
        paddingTop: 50,
        fontFamily: "Averta-Bold",
    },
    icon: {
        position: "absolute",
        left: 20,
        paddingTop: 50,
    },
    ticketTitle: {
        fontSize: 16,
        color: "white",
        fontWeight: "300",
        paddingBottom: 3,
        fontFamily: "Averta-Regular",
    },
    ticketSubtitle: {
        fontSize: 14,
        color: "white",
        fontWeight: "300",
        fontFamily: "Averta-Regular",
        textAlign: "center",
    },
});

export default Navbar;
