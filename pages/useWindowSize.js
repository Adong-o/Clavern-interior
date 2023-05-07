import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        if (typeof window !== 'undefined') {
            handleResize();
            window.addEventListener('resize', handleResize);
            window.addEventListener('orientationchange', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('orientationchange', handleResize);
            }
        };
    }, []);

    return windowDimensions;
}

export default useWindowSize;