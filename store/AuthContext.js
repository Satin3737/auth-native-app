import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useEffect, useState} from 'react';
import AuthApi from '../api/AuthApi';

export const AuthContext = createContext({
    token: {
        idToken: null,
        refreshToken: null,
        expiresIn: null
    },
    isTimeToRefresh: false,
    isAuthenticated: false,
    login: tokenData => {},
    logout: () => {},
    getStoredToken: async () => {}
});

const AuthContextProvider = ({children}) => {
    const {refreshUserToken} = AuthApi();
    const [token, setToken] = useState(null);
    const [isTimeToRefresh, setIsTimeToRefresh] = useState(false);
    const [refreshTimeoutId, setRefreshTimeoutId] = useState(undefined);

    const login = tokenData => {
        setToken(tokenData);
        startRefreshTimer(tokenData.expiresIn);
        AsyncStorage.setItem('token', JSON.stringify(tokenData));
    };

    const logout = () => {
        setToken(null);
        setIsTimeToRefresh(false);
        clearTimeout(refreshTimeoutId);
        setRefreshTimeoutId(undefined);
        AsyncStorage.removeItem('token');
    };

    const getStoredToken = async () => {
        const storedToken = JSON.parse(await AsyncStorage.getItem('token'));
        if (storedToken) {
            const {
                id_token: idToken,
                expires_in: expiresIn,
                refresh_token: refreshToken
            } = await refreshUserToken(storedToken.refreshToken);
            setToken({idToken, refreshToken, expiresIn});
            startRefreshTimer(expiresIn);
        }
    };

    const startRefreshTimer = expiresIn => {
        const timer = setTimeout(() => setIsTimeToRefresh(true), (expiresIn * 1000) / 2);
        setRefreshTimeoutId(timer);
    };

    useEffect(() => {
        if (isTimeToRefresh) {
            refreshUserToken(token.refreshToken).then(res => {
                const {id_token: idToken, expires_in: expiresIn, refresh_token: refreshToken} = res;
                setToken({idToken, refreshToken, expiresIn});
                setIsTimeToRefresh(false);
                startRefreshTimer(expiresIn);
            });
        }
    }, [isTimeToRefresh]);

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
