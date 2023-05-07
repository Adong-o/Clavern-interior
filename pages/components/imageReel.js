import { useState, useRef, useEffect } from 'react';
import styles from '../../styles/ImageReel.module.css';
import { wait } from '../../utils';
import Animate from './animate';
import ArrowNavigation from './arrowNavigation';

const IMAGE_TIME = 3000;

const ImageReel = ({
    images = [],
    width = 1000,
    height = 700
}) => {
    if (!images.length) return null;
    const [topImageIndex, setTopImageIndex] = useState(0);
    const [bottomImageIndex, setBottomImageIndex] = useState(1);
    const [canSwitch, setCanSwitch] = useState(true);
    const intervalRef = useRef(null);
    const useWidthRef = useRef(Array(images.length).fill(false));
    const topImageIndexRef = useRef(0);

    const animateFunctions = useRef({});

    const getNewNextImageIndex = (index) => {
        if (index === images.length) return 0;
        if (index === -1) return images.length - 1;
        return index;
    }

    const fadeAndSwitch = async (toIndex) => {
        setCanSwitch(false);
        setBottomImageIndex(toIndex);
        await animateFunctions.current.fadeOut();
        setTopImageIndex(toIndex);
        topImageIndexRef.current = toIndex;
        await wait(100);
        await animateFunctions.current.reset();
        setCanSwitch(true);
    };

    const fadeAndSwitchNext = () => {
        const nextNextIndex = getNewNextImageIndex(topImageIndexRef.current + 1);
        fadeAndSwitch(nextNextIndex);
    }

    useEffect(() => {
        intervalRef.current = setInterval(fadeAndSwitchNext, IMAGE_TIME);
        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        useWidthRef.current = Array(images.length).fill(false);
        for (let i = 0; i < images.length; i++) {
            const pic = images[i];
            const imageRatio = pic.width / pic.height;
            const screenRatio = width / height;
            if (imageRatio < screenRatio) {
                useWidthRef.current[i] = true;
            }
        }
    }, [images, width, height]);

    const clickArrow = (left = false) => {
        clearInterval(intervalRef.current);
        if (!canSwitch) return;
        const nextIndexUncorrected = topImageIndexRef.current + (left ? -1 : 1);
        const nextNextIndex = getNewNextImageIndex(nextIndexUncorrected);
        fadeAndSwitch(nextNextIndex);
    };

    let mainImageProp = useWidthRef.current[topImageIndex] ? { width: '100%' } : { height: '100%' };
    let secondaryImageProp = useWidthRef.current[bottomImageIndex] ? { width: '100%' } : { height: '100%' };

    return (
        <div className={styles.mainImage}>
            <ArrowNavigation clickArrow={clickArrow} height={height} />
            <Animate getMethods={funcsObject => animateFunctions.current = funcsObject}>
                <div className={styles.imageHolder} style={{ zIndex: 1, width, height }}>
                    <img
                        className={styles.image}
                        src={images[topImageIndex].src}
                        alt="main-image"
                        {...mainImageProp}
                    ></img>
                </div>
            </Animate>
            <div className={styles.imageHolder} style={{ zIndex: -1, width, height }}>
                <img
                    className={styles.image}
                    src={images[bottomImageIndex].src}
                    alt="secondary-image"
                    {...secondaryImageProp}
                ></img>
            </div>
            <div style={{ width, height }} />
        </div>
    );
}

export default ImageReel;