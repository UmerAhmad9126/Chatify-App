import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../theme/Colors';
import { useNavigation } from '@react-navigation/native';
import { ContactListData } from '../data/ContactListData';

const ContactList = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contacts on Whatsapp</Text>
            {ContactListData.map(item => (
                <View key={item.id}>
                    <TouchableOpacity
                        onPress={() => onNavigate(item.id)}
                        style={styles.contactContainer}>
                        <Image source={item.userImg} style={styles.imgStyle} />
                        <Text style={styles.username}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        padding: 16,
        flex: 1,
    },
    imgStyle: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    username: {
        fontSize: 16,
        color: Colors.textColor,
        marginLeft: 15,
    },
    title: {
        fontSize: 12,
        color: Colors.textGrey,
        marginVertical: 5,
    },
    contactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
});

export default ContactList;