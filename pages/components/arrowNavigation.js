import styles from '../../styles/ArrowNavigation.module.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const ArrowNavigation = ({ clickArrow, height }) => {
    const clickArrowLeft = () => clickArrow(true);
    const clickArrowRight = () => clickArrow(false);

    return (
        <div className={styles.arrowContainer} style={{ height }}>
            <div
                className={styles.arrow}
                onClick={clickArrowLeft}
            >
                <AiOutlineArrowLeft />
            </div>
            <div
                className={styles.arrow}
                onClick={clickArrowRight}
            >
                <AiOutlineArrowRight />
            </div>
        </div>
    );
}

export default ArrowNavigation;