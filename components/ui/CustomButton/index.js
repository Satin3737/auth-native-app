import {Ionicons} from '@expo/vector-icons';
import {useMemo} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './style';

export const btnTypes = {
    regular: 'regular',
    flat: 'flat',
    icon: 'icon'
};

const CustomButton = ({
    children = null,
    type = btnTypes.regular,
    onPress = () => {},
    buttonStyles = [],
    textStyles = []
}) => {
    const btnStyles = useMemo(() => ({
        regular: {
            btn: styles.regularButton,
            text: styles.regularButtonText
        },
        flat: {
            btn: styles.flatButton,
            text: styles.flatButtonText
        },
        icon: {
            btn: styles.iconButton,
            text: null
        }
    }));

    return (
        <Pressable
            style={({pressed}) => [btnStyles[type].btn, pressed && styles.pressed, ...buttonStyles]}
            onPress={onPress}
        >
            {type === btnTypes.icon ? (
                <Ionicons name={icon} color={color} size={size} />
            ) : (
                <View>
                    <Text style={[btnStyles[type].text, ...textStyles]}>{children}</Text>
                </View>
            )}
        </Pressable>
    );
};

export default CustomButton;
