import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcons'
import { ChatListData } from '../data/ChatListData'


const ChatList = () => {
    return (
        <>
            {ChatListData.map((item) => (
                <View key={item.id}>
                    <TouchableOpacity style={styles.container}>

                        <View style={styles.leftContainer}>
                            <Image source={item.profile} style={styles.profileImg} />
                            <View>
                                <Text style={styles.userName}>{item.name}</Text>
                                <Text style={styles.message}>{item.message}</Text>
                            </View>
                        </View>

                        <View style={styles.rightContainer}>
                            <Text style={styles.timeStamp}>{item.time}</Text>
                            {item.mute && (
                                <VectorIcon type="MaterialCommunityIcons" name="volume-variant-off" size={22} color={Colors.textGrey} style={styles.muteIcon} />
                            )}
                        </View>

                    </TouchableOpacity>
                </View>
            ))}
        </>
    )
}

export default ChatList


const styles = StyleSheet.create({
    profileImg: {
        borderRadius: 50,
        height: 50,
        width: 50,
        marginRight: 15
    },
    container: {
        backgroundColor: Colors.background,
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    userName: {
        color: Colors.textColor,
        fontSize: 16,
    },
    message: {
        color: Colors.textGrey,
        fontSize: 14,
        marginTop: 5,
    },
    leftContainer: {
        flexDirection: "row",
    },
    timeStamp: {
        color: Colors.textGrey,
        fontSize: 12,
    },
    muteIcon: {
        marginTop: 5,
        marginLeft: 20

    }
})