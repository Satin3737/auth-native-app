import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useContext} from 'react';
import CustomButton, {btnSettings} from '../components/ui/CustomButton';
import {Colors} from '../const';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import {AuthContext} from '../store/AuthContext';

const Stack = createNativeStackNavigator();

const defaultScreenOptions = {
    headerStyle: {backgroundColor: Colors.primary500},
    headerTintColor: Colors.white,
    contentStyle: {backgroundColor: Colors.primary100}
};

const AppStack = () => {
    const {isAuthenticated, logout} = useContext(AuthContext);

    return (
        <Stack.Navigator screenOptions={defaultScreenOptions}>
            {!isAuthenticated ? (
                <Stack.Screen name={'login'} component={LoginScreen} />
            ) : (
                <Stack.Screen
                    name={'welcome'}
                    component={WelcomeScreen}
                    options={{
                        title: 'Welcome',
                        headerRight: ({tintColor}) => (
                            <CustomButton
                                type={btnSettings.icon.type}
                                iconProps={{color: tintColor}}
                                onPress={logout}
                            />
                        )
                    }}
                />
            )}
        </Stack.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    );
};

export default Navigation;
