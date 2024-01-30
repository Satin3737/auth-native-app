import {StyleSheet} from 'react-native';
import {Colors} from '../../../const';

const styles = StyleSheet.create({
    regularButton: {
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: Colors.primary500,
        elevation: 2,
        shadowColor: Colors.black,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    regularButtonText: {
        textAlign: 'center',
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    },
    flatButton: {
        paddingVertical: 6,
        paddingHorizontal: 12
    },
    flatButtonText: {
        textAlign: 'center',
        color: Colors.primary100
    },
    iconButton: {
        margin: 8,
        borderRadius: 20
    },
    pressed: {
        opacity: 0.7
    }
});

export default styles;
