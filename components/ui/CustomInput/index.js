import {Text, TextInput, View} from 'react-native';
import styles from './style';

const CustomInput = ({label, keyboardType, secure, onUpdateValue, value, isInvalid}) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, isInvalid && styles.labelInvalid]}>{label}</Text>
            <TextInput
                style={[styles.input, isInvalid && styles.inputInvalid]}
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    );
};

export default CustomInput;
