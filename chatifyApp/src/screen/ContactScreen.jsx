import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import ContactHeader from '../components/ContactHeader';
import { Colors } from '../theme/Colors';
import ContactList from '../components/ContactLists';

const ContactScreen = props => {

    return (
        <ScrollView style={styles.scrollViewStyle}>
            <ContactHeader />
            <ContactList />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewStyle: {
        backgroundColor: Colors.background,
    },
});

export default ContactScreen;