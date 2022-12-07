import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors'

const Header = props => {
    return (
        <View style={styles.Header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,

    }
});

export default Header;