import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from 'expo-haptics';

const Ticket = ({ backgroundImage, title, subtitle, onPress }) => {
    return (
        <View style={styles.card}>
            <View style={styles.headerRow}>
                <Text style={styles.header}>Standard Admission</Text>
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.row}>
                    <View style={styles.columnLeft}>
                        <Text style={styles.columnHeader}>SEC</Text>
                        <Text style={styles.columnSubheader}>118</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.columnHeader}>ROW</Text>
                        <Text style={styles.columnSubheader}>7</Text>
                    </View>
                    <View style={styles.columnRight}>
                        <Text style={styles.columnHeader}>SEAT</Text>
                        <Text style={styles.columnSubheader}>-</Text>
                    </View>
                </View>
            </View>
            <View>
                <Image
                    style={styles.image}
                    source={require("../assets/Buffalos.jpeg")}
                />
                <LinearGradient
                    colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
                    style={styles.imageOverlay}
                />
                <View style={styles.overlay}>
                    <Text style={styles.title}>
                        Colorado Buffaloes Football vs. Stanford Cardinal
                        Football
                    </Text>
                    <Text style={styles.subtitle}>
                        Fri, Oct 8, 8pm • Folsom Field Stadium
                    </Text>
                </View>
            </View>
            <View>
                <View style={styles.descriptionRow}>
                    <Text style={styles.descriptionHeader}>
                        GA FLR STANDING
                    </Text>
                </View>
                <View style={styles.appleWallet}>
					<TouchableOpacity onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)} activeOpacity={1} activeOpacity={1}>
						<Image
							style={styles.appleWalletImage}
							source={require("../assets/appleWallet.png")}
						/>
					</TouchableOpacity>
                </View>
                <View style={styles.optionsRow}>
					<TouchableOpacity onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)} activeOpacity={1}>
                    	<Text style={styles.optionsText}>View Barcode</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)} activeOpacity={1}>
                    	<Text style={styles.optionsText}>Ticket Details</Text>
					</TouchableOpacity>
                </View>
            </View>
            <View style={styles.footerRow}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 1,
        width: "80%",
        height: 218,
        position: "relative",
        display: "flex",
        shadowColor: "#000", //shadow color
        shadowOffset: {
            width: 0, //shadow offset
            height: 2,
        },
        shadowOpacity: 0.25, //shadow opacity
        shadowRadius: 3.84, //shadow blurriness

        elevation: 5, //this is necessary for Android
    },
    headerRow: {
        backgroundColor: "#0160C8",
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    footerRow: {
        backgroundColor: "#0160C8",
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 35,
    },
    header: {
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "Averta-Regular",
        color: "#fff",
    },
    rowContainer: {
        backgroundColor: "#026BDD",
    },
    row: {
        flexDirection: "row",
        marginVertical: 23,
        paddingHorizontal: 30,
    },
    column: {
        alignItems: "center",
        marginHorizontal: 45,
    },
    columnLeft: {
        flex: 1,
        alignItems: "center",
    },
    columnRight: {
        flex: 1,
        alignItems: "center",
    },
    columnHeader: {
        color: "#fff",
        fontFamily: "Averta-Regular",
    },
    columnSubheader: {
        color: "#fff",
        fontFamily: "Averta-Bold",
        fontSize: 22,
    },
    image: {
        width: "100%",
        height: 195,
    },
    overlay: {
        position: "absolute",
        bottom: 10,
        left: 15,
        right: 15,
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
        textAlign: "center",
    },
    subtitle: {
        fontSize: 14,
        color: "white",
        fontWeight: "300",
        fontFamily: "Averta-Regular",
        textAlign: "center",
    },
    imageOverlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0,
    },
    descriptionRow: {
        paddingHorizontal: 15,
        paddingTop: 25,
        paddingBottom: 35,
        backgroundColor: "#FFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Averta-Regular",
    },
    appleWallet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
    },
    appleWalletImage: {
        height: 42,
        resizeMode: "contain",
    },
    optionsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 40,
        height: 77,
        backgroundColor: "#fff",
    },
    optionsText: {
        color: "#026BDD",
        fontWeight: "600",
    },
});

export default Ticket;
