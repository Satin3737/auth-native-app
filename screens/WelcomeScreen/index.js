import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {AuthContext} from '../../store/AuthContext';
import styles from './style';

const WelcomeScreen = () => {
    const [fetchedText, setFetchedText] = useState('');
    const {token} = useContext(AuthContext);

    const testProtection = async () => {
        const res = await axios.get(
            `https://auth-native-app-f03fc-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=${token.idToken}`
        );
        setFetchedText(res.data);
    };

    useEffect(() => {
        testProtection();
    }, []);

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Welcome!</Text>
            <Text>You authenticated successfully!</Text>
            <Text>{fetchedText}</Text>
        </View>
    );
};

export default WelcomeScreen;
