import {Ionicons} from '@expo/vector-icons';
import {useMemo} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Colors} from '../../../const';
import styles from './style';

export const btnSettings = {
    regular: {
        type: 'regular',
        btn: styles.regularButton,
        text: styles.regularButtonText
    },
    flat: {
        type: 'flat',
        btn: styles.flatButton,
        text: styles.flatButtonText
    },
    icon: {
        type: 'icon',
        btn: styles.iconButton,
        props: {
            name: 'exit',
            color: Colors.white,
            size: 24
        }
    }
};

const CustomButton = ({
    children = null,
    type = btnSettings.regular.type,
    onPress = () => {},
    buttonStyles = [],
    textStyles = [],
    iconProps = {}
}) => {
    return (
        <Pressable
            style={({pressed}) => [btnSettings[type].btn, pressed && styles.pressed, ...buttonStyles]}
            onPress={onPress}
        >
            {type === btnSettings.icon.type ? (
                useMemo(() => {
                    return <Ionicons {...btnSettings.icon.props} {...iconProps} />;
                }, [iconProps])
            ) : (
                <View>
                    <Text style={[btnSettings[type].text, ...textStyles]}>{children}</Text>
                </View>
            )}
        </Pressable>
    );
};

export default CustomButton;
