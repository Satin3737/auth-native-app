import {hideAsync} from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';
import {useCallback, useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import Navigation from './navigation';
import AuthContextProvider, {AuthContext} from './store/AuthContext';
import styles from './style';

const Screen = () => {
    const [appIsReady, setAppIsReady] = useState(false);
    const {getStoredToken} = useContext(AuthContext);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await hideAsync();
        }
    }, [appIsReady]);

    useEffect(() => {
        getStoredToken().finally(() => setAppIsReady(true));
    }, []);

    return (
        appIsReady && (
            <View style={styles.screen} onLayout={onLayoutRootView}>
                <StatusBar style="light" />
                <Navigation />
            </View>
        )
    );
};

const App = () => {
    return (
        <AuthContextProvider>
            <Screen />
        </AuthContextProvider>
    );
};

export default App;
