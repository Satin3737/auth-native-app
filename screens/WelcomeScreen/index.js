import {Text, View} from 'react-native';
import styles from './style';

const WelcomeScreen = () => {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Welcome!</Text>
            <Text>You authenticated successfully!</Text>
        </View>
    );
};

export default WelcomeScreen;
