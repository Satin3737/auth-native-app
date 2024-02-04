import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useState} from 'react';

export const AuthContext = createContext({
    token: null,
    isAuthenticated: false,
    login: token => {},
    logout: () => {},
    getStoredToken: async () => {}
});

const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState(null);

    const login = token => {
        setToken(token);
        AsyncStorage.setItem('token', token);
    };

    const logout = () => {
        setToken(null);
        AsyncStorage.removeItem('token');
    };

    const getStoredToken = async () => {
        const storedToken = await AsyncStorage.getItem('token');
        storedToken && setToken(storedToken);
    };

    const value = {
        token,
        isAuthenticated: !!token,
        login,
        logout,
        getStoredToken
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
