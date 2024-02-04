import {useNavigation} from '@react-navigation/native';
import {useContext, useState} from 'react';
import {Alert, View} from 'react-native';
import AuthApi from '../../../api/AuthApi';
import {AuthContext} from '../../../store/AuthContext';
import CustomButton, {btnTypes} from '../../ui/CustomButton';
import LoadingOverlay from '../../ui/LoadingOverlay';
import AuthForm from '../AuthForm';
import styles from './style';

function AuthContent({isLogin}) {
    const {replace} = useNavigation();
    const {login} = useContext(AuthContext);
    const {singUpUser, singInUser} = AuthApi();
    const [loading, setLoading] = useState(false);
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmEmail: false,
        confirmPassword: false
    });

    const switchAuthModeHandler = () => (isLogin ? replace('signup') : replace('login'));

    const submitHandler = async credentials => {
        let {email, confirmEmail, password, confirmPassword} = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 7;
        const emailsAreEqual = email === confirmEmail;
        const passwordsAreEqual = password === confirmPassword;

        if (!emailIsValid || !passwordIsValid || (!isLogin && (!emailsAreEqual || !passwordsAreEqual))) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');

            setCredentialsInvalid({
                email: !emailIsValid,
                confirmEmail: !emailIsValid || !emailsAreEqual,
                password: !passwordIsValid,
                confirmPassword: !passwordIsValid || !passwordsAreEqual
            });

            return;
        }

        setLoading(true);

        try {
            login(isLogin ? await singInUser(email, password) : await singUpUser(email, password));
        } catch (e) {
            Alert.alert('Auth failed!', 'Please check your credentials');
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    return loading ? (
        <LoadingOverlay message={isLogin ? 'Login...' : 'Creating user...'} />
    ) : (
        <View style={styles.authContent}>
            <AuthForm isLogin={isLogin} onSubmit={submitHandler} credentialsInvalid={credentialsInvalid} />
            <View style={styles.buttons}>
                <CustomButton type={btnTypes.flat} onPress={switchAuthModeHandler}>
                    {isLogin ? 'Create a new user' : 'Log in instead'}
                </CustomButton>
            </View>
        </View>
    );
}

export default AuthContent;
