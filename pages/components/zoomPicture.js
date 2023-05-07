import { useEffect } from 'react';
import { BsFullscreenExit } from 'react-icons/bs';
import ArrowNavigation from "./arrowNavigation";
import styles from '../../styles/ZoomPicture.module.css';

const ZoomPicture = (props) => {
    const { pic, clickArrow, onXClick } = props;
    if (!pic) return null;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'auto';
    });

    const imageProps = {};
    const imageRatio = pic.width / pic.height;
    const screenRatio = window.innerWidth / window.innerHeight;
    if (imageRatio < screenRatio) {
        imageProps.height = Math.min(pic.height, window.innerHeight - 60);
    } else {
        imageProps.width = Math.min(pic.width, window.innerWidth - 60);
    }
    return (
        <div className={styles.zoomBackground}>
            {!!clickArrow && (
                <ArrowNavigation
                    clickArrow={clickArrow}
                    height={window.innerHeight}
                />
            )}
            <BsFullscreenExit className={styles.XIcon} onClick={onXClick} />
            <img
                src={pic.src}
                alt={pic.src}
                style={{
                    resizeMode: 'cover'
                }}
                {...imageProps}
            />
        </div>
    );
}

export default ZoomPicture;