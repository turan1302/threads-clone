import { View, Text, Image, Alert } from 'react-native';
import useScreenDimensions from '../../hooks/useScreenDimensions';
import { useEffect } from 'react';
import * as NavigationService from '../../common/NavigationService';

const Splash = () => {
    const { width, height } = useScreenDimensions();


    useEffect(() => {
        setTimeout(() => {
            NavigationService.navigate('WelcomeNavigator');
        }, 1500);
    }, []);


    return (
        <Image source={require('../../assets/splash/image.jpeg')} style={{ width: width, height: height }} />
    );
};

export default Splash;
