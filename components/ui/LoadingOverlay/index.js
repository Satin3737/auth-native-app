import {ActivityIndicator, Text, View} from 'react-native';
import styles from './style';

const LoadingOverlay = ({message}) => {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.message}>{message}</Text>
            <ActivityIndicator size="large" />
        </View>
    );
};

export default LoadingOverlay;
