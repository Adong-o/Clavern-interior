import Link from 'next/link';
import styles from '../../styles/Footer.module.css';
import logoImage from '../../public/logo-image-dark.png';
import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import useWindowSize from '../useWindowSize';

const Footer = () => {
    const { width } = useWindowSize();
    return (
        <div className={styles.footerContainer} style={width > 800 ? {} : { flexDirection: 'column' }}>
            <div className={styles.topFooter}>
                <div className={styles.section}>
                    <img src={logoImage.src} alt="logo-image" width="250px" />
                    <div className={styles.divider} />
                    <div className={styles.socials}>
                        <AiFillFacebook
                            className={styles.socialIcon}
                            onClick={() => window.open('https://www.facebook.com/people/Claverm-Interior/100063714871819/?mibextid=ZbWKwL', '_blank')}
                        />
                        <FaInstagramSquare
                            className={styles.socialIcon}
                            style={{ marginTop: 2, fontSize: 36 }}
                            onClick={() => window.open('https://instagram.com/claverminteriors?igshid=OGQ2MjdiOTE=', '_blank')}
                        />
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Contacts</div>
                    {/* <div className={styles.sectionText}>
                        Place location area
                    </div> */}
                    <div className={styles.sectionText}>
                        <p>+254792414667</p>
                        <p>+254715331708</p>
                        <p>claverminteriors@gmail.com</p>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Claverm Interiors</div>
                    <Link className={styles.sectionText} href="/">• Home</Link>
                    <Link className={styles.sectionText} href="/work">• Work</Link>
                    <Link className={styles.sectionText} href="/contact">• Contact</Link>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Opening Hours</div>
                    <div className={styles.sectionText} style={{ cursor: 'default' }}>
                        <p>Mon - Fri: 9am - 5pm</p>
                        <p>​​Sat - Sun: Closed</p>
                    </div>
                </div>
            </div>
            <div className={styles.bottomFooter}>
                © Claverm Interiors. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;