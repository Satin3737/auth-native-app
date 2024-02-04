import axios from 'axios';

const AuthApi = () => {
    const baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts';
    const apiKey = 'AIzaSyAz4xwJytD_ItXFtBPl8ivOME7eTgE6gg0';
    const authActions = {
        signUp: 'signUp',
        signIn: 'signInWithPassword'
    };

    const authUser = async (authActions, email, password) => {
        const res = await axios.post(`${baseUrl}:${authActions}?key=${apiKey}`, {
            email,
            password,
            returnSecureToken: true
        });
        console.log(res.data);
        return res?.data?.idToken;
    };

    const singUpUser = (email, password) => authUser(authActions.signUp, email, password);
    const singInUser = (email, password) => authUser(authActions.signIn, email, password);

    return {
        singUpUser,
        singInUser
    };
};

export default AuthApi;
