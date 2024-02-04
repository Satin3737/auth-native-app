import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import Navigation from './navigation';
import AuthContextProvider from './store/AuthContext';
import styles from './style';

const App = () => {
    return (
        <AuthContextProvider>
            <View style={styles.screen}>
                <StatusBar style="light" />
                <Navigation />
            </View>
        </AuthContextProvider>
    );
};

export default App;
