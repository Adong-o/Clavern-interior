import Page from './components/page';
import styles from '../styles/Home.module.css';
import modernoffice from '../public/modernoffice.png';
import modernrustic from '../public/modernrustic.png';
import simpleelegant from '../public/simpleelegant.png';
import sess from '../public/simpleelegantsmallspaces.png';
import smallspaces from '../public/smallspaces.png';
import themed from '../public/themed.png';
import ImageReel from './components/imageReel';
import useWindowSize from './useWindowSize';

const Home = () => {
  const { width, height } = useWindowSize();
  console.log({ width, height });
  return (
    <>
      <main>
        <Page>
          <ImageReel
            width={width}
            images={[
              modernoffice,
              modernrustic,
              simpleelegant,
              sess,
              smallspaces,
              themed
            ]}
          />
          <div className={styles.descriptionSection}>
            <div className={styles.decriptionTitle}>
              Why Claverm cares about your interior.
            </div>
            <div className={styles.divider} />
            <div className={styles.decriptionText}>
              Every space we spend our time in deserves to be homely and should lift us up emotionally. We as Claverm Interiors, add a touch of class to make it look modern and stylish, antique and polished and to fit our clients standards and preference.
            </div>
          </div>
        </Page>
      </main>
    </>
  )
};

export default Home;