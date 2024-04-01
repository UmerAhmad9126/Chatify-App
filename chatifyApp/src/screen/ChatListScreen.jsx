import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ChatList from '../components/ChatList'
import VectorIcon from '../utils/VectorIcons'
import { Colors } from '../theme/Colors'
import { useNavigation } from '@react-navigation/native'


const ChatListScreen = () => {
    const navigation = useNavigation();

    const onNavigate = () => {
        navigation.navigate("ContactScreen")
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <ChatList />
            </ScrollView>
            <TouchableOpacity style={styles.contactIcon} onPress={onNavigate}>
                <VectorIcon type="MaterialCommunityIcons" name="message-reply-text" size={22} color={Colors.white} />
            </TouchableOpacity>
        </View>
    )
}

export default ChatListScreen


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: Colors.background,
        flex: 1,
    },
    contactIcon: {
        backgroundColor: Colors.tertiary,
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: "center",
        position: 'absolute',
        bottom: 30,
        right: 20,
    }
})