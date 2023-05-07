import React, { useState } from 'react';
import { useRouter } from "next/router";
import Page from "./components/page";
import PictureHolder from "./components/pictureHolder";
import { defined } from '../utils';
import styles from '../styles/Work.module.css';
import after from '../public/after.jpg';
import before from '../public/before.jpg';
import inprogress1 from '../public/inprogress1.jpg';
import commercialclothdisplay from '../public/commercialclothddisplay.jpg';
import commercialclothdisplay2 from '../public/commercialclothddisplay2.jpg';
import commercialclothdisplay3 from '../public/commercialclothddisplay3.jpg';
import ankaracurtains3 from '../public/anakaracurtains2.jpg';
import ankaracurtains from '../public/ankaracurtains.jpg';
import curtains from '../public/curtains.jpg';
import betsafelogo from '../public/betsafelogo.jpg';
import officespace from '../public/officespace.jpg';
import officespace2 from '../public/officespace2.jpg';
import repair1 from '../public/repair1.jpg';
import repair2 from '../public/repair2.jpg';
import repair3 from '../public/repair3.jpg';
import gypsumbednet from '../public/gypsumnbednet.jpg';
import completewithsnakelight from '../public/completewithsnakelight.jpg';
import inprogress from '../public/inprogress.jpg';
import curtainandwallpaper from '../public/curtain-and-wallpaper.jpeg';
import lighting from '../public/lighting.jpg';
import kitchen from '../public/kitchen.jpg';
import kidsroom from '../public/kidsroom.jpg';
import masterbedroom from '../public/masterbedroom.jpg';
import livingroom1 from '../public/livingroom1.jpg';
import livingroom2 from '../public/livingroom2.jpg';
import ZoomPicture from './components/zoomPicture';

function Work() {
    const [zoomPic, setZoomPic] = useState({ job: -1, image: -1 });
    const router = useRouter();
    const index = router?.query?.index;
    const jobs = [
        {
            title: 'Kileleshwa',
            images: [
                after,
                before,
                inprogress1,
            ]
        },
        {
            title: 'Jewel Complex',
            images: [
                commercialclothdisplay,
                commercialclothdisplay2,
                commercialclothdisplay3
            ]
        },
        {
            title: 'Kilimani 1',
            images: [
                ankaracurtains3,
                ankaracurtains,
                curtains,
            ]
        },
        {
            title: 'Bet Safe',
            images: [
                betsafelogo,
                officespace,
                officespace2,
            ]
        },
        {
            title: 'Kileleshwa 2',
            images: [
                repair1,
                repair2,
                repair3,
            ]
        },
        {
            title: 'Gypsum',
            images: [
                gypsumbednet,
                completewithsnakelight,
                inprogress,
            ]
        },
        {
            title: 'Lavington',
            images: [
                curtainandwallpaper,
                lighting,
                kitchen,
                kidsroom,
                masterbedroom,
            ]
        },
        {
            title: 'Mombasa',
            images: [
                livingroom1,
                livingroom2,
            ]
        }
    ]

    const clickArrow = (left = false) => {
        let image = zoomPic.image + (left ? -1 : 1);
        const arrLen = jobs[zoomPic.job].images.length;
        if (image === -1) image = arrLen - 1;
        if (image === arrLen) image = 0;
        setZoomPic({ ...zoomPic, image });
    }

    const _body = () => !defined(index) ? (
        <div className={styles.workBody}>
            {jobs.map((job, index) => (
                <div key={`${job.title}-pic-holder`}>
                    <PictureHolder
                        job={job}
                        index={index}
                        clickZoom={() => {
                            setZoomPic({ job: index, image: 0 });
                        }}
                    />
                </div>
            ))}
        </div>
    ) : (
        <div className={styles.workJobContainer}>
            <img
                className={styles.workJobImage}
                onClick={() => setZoomPic({ job: index, image: 0 })}
                src={jobs[index].images[0].src}
                alt={jobs[index].title}
                style={{
                    resizeMode: 'cover',
                    margin: 20
                }}
                width={Math.min(jobs[index].images[0].width, 1090)}
            />
            <div className={styles.jobTitle}>{jobs[index].title}</div>
            <div className={styles.workBody}>
                {jobs[index].images.map((image, i) => (
                    <img
                        className={styles.workJobImage}
                        onClick={() => setZoomPic({ job: index, image: i })}
                        key={image.src}
                        src={image.src}
                        alt={image.src}
                        style={{
                            resizeMode: 'cover',
                            height: 350,
                            width: 350,
                            margin: 10
                        }}
                        height={350}
                        widht={350}
                    />
                ))}
            </div>
        </div>
    );

    return (
      <Page>
            {zoomPic.job !== -1 && zoomPic.image !== -1 && (
                <ZoomPicture
                    pic={jobs[zoomPic.job].images[zoomPic.image]}
                    clickArrow={defined(index) && clickArrow}
                    onXClick={() => setZoomPic({ job: -1, image: -1 })}
                />
            )}
            {_body()}
        </Page>
    );
}

export default Work