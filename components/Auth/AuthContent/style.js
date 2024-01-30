import {StyleSheet} from 'react-native';
import {Colors} from '../../../const';

const styles = StyleSheet.create({
    authContent: {
        marginTop: 64,
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.35,
        shadowRadius: 4
    },
    buttons: {
        marginTop: 8
    }
});

export default styles;
