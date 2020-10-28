import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

const items = [
    {
        description: "Stuffed Doggy",
        link: "https://images-na.ssl-images-amazon.com/images/I/71p9FR2c4ML._AC_SX425_.jpg",
        price: 25,
        recipient_name: "Dani"
    },
    {
        description: "Elmo",
        link: "https://images-na.ssl-images-amazon.com/images/I/81tISKde7HL._AC_SL1500_.jpg",
        price: 35,
        recipient_name: "Meg"
    },
    {
        description: "Blues Clues & You",
        link: "https://target.scene7.com/is/image/Target/GUEST_0536a564-acaa-48f5-8236-69f7372071d6?wid=488&hei=488&fmt=pjpeg",
        price: 45,
        recipient_name: "Steve"
    }
]



export default function ViewCampaign() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>View Campaign</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <EditScreenInfo path="/screens/TabTwoScreen.js" />
        </View>
    );
}
