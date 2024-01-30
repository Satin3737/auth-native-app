import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import Navigation from './navigation';
import styles from './style';

const App = () => {
    return (
        <View style={styles.screen}>
            <StatusBar style="light" />
            <Navigation />
        </View>
    );
};

export default App;
