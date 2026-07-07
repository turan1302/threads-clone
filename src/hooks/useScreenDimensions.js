import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useScreenDimensions = () => {
    const [screen, setScreen] = useState(() => Dimensions.get('window'));

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setScreen(window);
        });

        return () => subscription?.remove();
    }, []);

    return screen;
};

export default useScreenDimensions;