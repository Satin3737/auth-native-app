import {StyleSheet} from 'react-native';
import {Colors} from '../../../const';

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8
    },
    label: {
        color: 'white',
        marginBottom: 4
    },
    labelInvalid: {
        color: Colors.error500
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        fontSize: 16
    },
    inputInvalid: {
        backgroundColor: Colors.error100
    }
});

export default styles;
