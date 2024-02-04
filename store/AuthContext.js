import {createContext, useState} from 'react';

export const AuthContext = createContext({
    token: null,
    isAuthenticated: false,
    login: token => {},
    logout: () => {}
});

const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const login = token => setToken(token);
    const logout = () => setToken(null);

    const value = {
        token,
        isAuthenticated: !!token,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
