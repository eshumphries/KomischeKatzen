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
    if (width < 640) return 'xs';
    if (width < 768) return 'sm';
    if (width < 1024) return 'md';
    if (width < 1280) return 'lg';
    if (width < 1536) return 'xl';
    return '2xl';
};

export default useScreenSize;