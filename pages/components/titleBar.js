import styles from '../../styles/TitleBar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router'
import logoImage from '../../public/logo-image.png';

const TitleBar = () => {
    const router = useRouter();
    return (
        <div className={styles.topSection}>
            <Link className={styles.logo} href="/">
                <img src={logoImage.src} alt="logo-image" height="100px"></img>
            </Link>
            <div className={styles.tabs}>
                <Link className={styles.tab} style={{ color: router.pathname === '/' ? '#999' : '#2e2e2e' }} href="/">Home</Link>
                <Link className={styles.tab} style={{ color: router.pathname === '/work' ? '#999' : '#2e2e2e' }} href="/work">Work</Link>
                {/* <Link className={styles.tab} href="/press">press</Link> */}
                <Link className={styles.tab} style={{ color: router.pathname === '/contact' ? '#999' : '#2e2e2e' }} href="/contact">contact</Link>
            </div>
        </div>
    );
}

export default TitleBar;