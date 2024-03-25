import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import chatifyLogo from "../assets/WhatsApp_logo.png"
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcons'

export default function Header() {
    return (
        <View style={styles.container}>
            <Image source={chatifyLogo} style={styles.chatifyLogo} />

            <View style={styles.headerIcon}>
                <VectorIcon type="Feather" name="camera" color={Colors.secondaryColor} size={22} />
                <VectorIcon type="Ionicons" name="search" color={Colors.secondaryColor} size={20} style={styles.iconStyle} />
                <VectorIcon type="Entypo" name="dots-three-vertical" color={Colors.secondaryColor} size={18} />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    chatifyLogo: {
        width: 110,
        height: 25,
    },
    headerIcon: {
        flexDirection: "row",

    },
    iconStyle: {
        marginHorizontal: 25
    }
})  