import Head from 'next/head'
import TitleBar from './titleBar';
import Footer from './footer';

const Page = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Claverm Interiors</title>
            </Head>
            <TitleBar />
            <div style={{ marginTop: 150 }}>
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default Page;