import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TouchableOpacityProps, View, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';



interface GameProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType;
}


interface GameCardProps extends TouchableOpacityProps {
    data: GameProps
}


export function GameCard({ data, ...rest }: GameCardProps) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>

            <ImageBackground
                style={styles.cover}
                source={data.cover}
            >

                <LinearGradient
                    colors={THEME.COLORS.FOOTER}
                    style={styles.footer}
                >
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.ads}>{data.ads} anuncios</Text>

                </LinearGradient>
            </ImageBackground>

        </TouchableOpacity>
    );
}