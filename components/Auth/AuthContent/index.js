import {useState} from 'react';
import {Alert, View} from 'react-native';
import CustomButton, {btnTypes} from '../../ui/CustomButton';
import AuthForm from '../AuthForm';
import styles from './style';

function AuthContent({isLogin, onAuthenticate}) {
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmEmail: false,
        confirmPassword: false
    });

    const switchAuthModeHandler = () => {
        // Todo
    };

    const submitHandler = credentials => {
        let {email, confirmEmail, password, confirmPassword} = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;
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
        onAuthenticate({email, password});
    };

    return (
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
