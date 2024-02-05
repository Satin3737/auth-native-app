import axios from 'axios';

const AuthApi = () => {
    const apiKey = 'AIzaSyAz4xwJytD_ItXFtBPl8ivOME7eTgE6gg0';
    const authActions = {
        signUp: 'signUp',
        signIn: 'signInWithPassword'
    };

    const authUser = async (authActions, email, password) => {
        const res = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:${authActions}?key=${apiKey}`,
            {
                email,
                password,
                returnSecureToken: true
            }
        );
        return res?.data;
    };

    const singUpUser = (email, password) => authUser(authActions.signUp, email, password);
    const singInUser = (email, password) => authUser(authActions.signIn, email, password);

    const refreshUserToken = async refreshToken => {
        const res = await axios.post(`https://securetoken.googleapis.com/v1/token?key=${apiKey}`, {
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        });
        return res?.data;
    };

    return {
        singUpUser,
        singInUser,
        refreshUserToken
    };
};

export default AuthApi;
