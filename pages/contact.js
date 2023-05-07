import styles from '../styles/Contact.module.css';
import { FaPhone } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import Page from "./components/page";

const ContactLine = ({ icon, text, onClick }) => (
    <div className={styles.contactLine} onClick={onClick}>
        <div className={styles.contactIcon}>
            {icon}
        </div>
        <div className={styles.contactText}>
            {text}
        </div>
    </div>
);

const Contact = () => {
    const email = 'claverminteriors@gmail.com';
    const subject = 'Regarding your website';
    return (
        <Page>
            <div className={styles.contactContainer}>
                <div className={styles.contactTitle}>
                    Contact
                </div>
                <ContactLine
                    icon={<FaPhone />}
                    text={'+254792414667, +254715331708'}
                />
                <ContactLine
                    icon={<MdMail />}
                    text={email}
                    onClick={() => {
                        window.open(`mailto:${email}?subject=${subject}&body=`);
                    }}
                />
                <ContactLine
                    icon={<BsFacebook />}
                    text={'Claverm Interiors'}
                    onClick={() => {
                        window.open('https://www.facebook.com/people/Claverm-Interior/100063714871819/?mibextid=ZbWKwL', '_blank');
                    }}
                />
                <ContactLine
                    icon={<BsInstagram />}
                    text={'Claverm Interiors'}
                    onClick={() => {
                        window.open('https://instagram.com/claverminteriors?igshid=OGQ2MjdiOTE=', '_blank');
                    }}
                />
            </div>
        </Page>
    )
};

export default Contact;