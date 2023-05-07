import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/PictureHolder.module.css';

const PictureHolder = (props) => {
    const {
        job,
        width = 300,
        height = 200,
        clickZoom,
        index
    } = props;
    if (!job) return null;

    const [hover, setHover] = useState(false);

    const jobUrl = `/work?index=${index}`;
    let imgSizeProp = { width: hover ? '120%' : '100%' };

    if (job?.images[0]?.height < job?.images[0]?.width) {
        imgSizeProp = { height: hover ? '120%' : '100%' };
    }

    return (
        <div className={styles.pictureHolderContainer}>
            <div className={styles.pictureTitle}>{job.title}</div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width,
                    height,
                    margin: 10,
                    overflow: "hidden"
                }}
                onMouseEnter={async () => {
                    setHover(true);
                }}
                onMouseLeave={async () => {
                    setHover(false);
                }}
            >
                <div
                    className={styles.pictureCover}
                    style={{
                        width,
                        height,
                    }}
                >
                    <Link
                        href={jobUrl}
                        className={styles.pictureButton}
                    >
                        VIEW
                    </Link>
                    <div
                        onClick={clickZoom}
                        className={styles.pictureButton}
                    >
                        ZOOM
                    </div>
                </div>
                <img
                    src={job.images[0].src}
                    alt={job.title}
                    style={{
                        resizeMode: 'cover',
                        transition: '500ms'
                    }}
                    {...imgSizeProp}
                ></img>
            </div>
        </div>
    );
}

export default PictureHolder;