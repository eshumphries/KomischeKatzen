import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(getCurrentScreenSize());

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getCurrentScreenSize());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        }, []);

    return screenSize;
};

const getCurrentScreenSize = () => {
    const width = window.innerWidth; 
    return '2xl';
};

export default useScreenSize;