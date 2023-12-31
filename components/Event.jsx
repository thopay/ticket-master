import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Event = ({ backgroundImage, title, subtitle, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
            activeOpacity={1}
        >
            <Image source={backgroundImage} style={styles.image} />
            <LinearGradient
                colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
                style={styles.imageOverlay}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View style={styles.ticketContainer}>
                <Entypo name="ticket" size={16} color="white" />
                <Text style={styles.ticketText}>1 ticket</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 10,
        marginTop: 8,
        width: "96%",
        height: 218,
        position: "relative",
        display: "flex",
    },

    textContainer: {
        position: "absolute",
        bottom: 33,
        left: 15,
        maxWidth: "99%",
    },

    title: {
        fontSize: 20,
        color: "white",
        fontWeight: "300",
        paddingBottom: 3,
        flex: 1,
        flexWrap: "wrap",
        flexShrink: 1,
        flexGrow: 1,
        fontFamily: "Averta-Regular",
    },

    subtitle: {
        fontSize: 14,
        color: "white",
        fontWeight: "300",
        fontFamily: "Averta-Regular",
    },

    ticketContainer: {
        position: "absolute",
        bottom: 12,
        left: 15,
        flexDirection: "row",
        alignItems: "center",
    },

    ticketText: {
        fontSize: 12,
        marginLeft: 5,
        color: "white",
        fontWeight: "300",
        fontFamily: "Averta-Regular",
    },

    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    imageOverlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0,
    },
});

export default Event;
