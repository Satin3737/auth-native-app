import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '../const';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const defaultScreenOptions = {
    headerStyle: {backgroundColor: Colors.primary500},
    headerTintColor: Colors.white,
    contentStyle: {backgroundColor: Colors.primary100}
};

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={defaultScreenOptions}>
            <Stack.Screen name={'login'} component={LoginScreen} options={{title: 'Log In'}} />
            <Stack.Screen name={'signup'} component={SignupScreen} options={{title: 'Sign Up'}} />
        </Stack.Navigator>
    );
};

const AuthenticatedStack = () => {
    return (
        <Stack.Navigator screenOptions={defaultScreenOptions}>
            <Stack.Screen name={'welcome'} component={WelcomeScreen} />
        </Stack.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
};

export default Navigation;
