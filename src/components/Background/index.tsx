
import { ImageBackground } from 'react-native';
import backgroundImg from '../../assets/background-galaxy.png'
import { styles } from './styles';

interface BackgroundProps {
    children: React.ReactElement
}

export function Background({ children }: BackgroundProps) {
    return (
        <ImageBackground
            style={styles.container}
            source={backgroundImg}
            defaultSource={backgroundImg}
        >
            {children}
        </ImageBackground>
    );
}