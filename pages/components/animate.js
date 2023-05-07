import { useState, useEffect } from 'react';
import { wait } from '../../utils';

const INCREMENT_TIME = 8;
const INCREMENT_AMOUNT = 1;

const Animate = ({
    originalSize = 1,
    originalOpacity = 1,
    children,
    getMethods
}) => {
    const [opacity, setOpacity] = useState(originalOpacity);
    const [size, setSize] = useState(originalSize);

    const reset = () => {
        setOpacity(originalOpacity);
        setSize(originalSize);
    }

    const fadeOut = (props) => new Promise(async (resolve) => {
        const {
            from = 1,
            to = 0,
            opacityIncrementAmount = INCREMENT_AMOUNT,
            opacityIncrementTime = INCREMENT_TIME
        } = props || {};
        let curOpacity = from;
        while (curOpacity > to) {
            const prevOpacity = curOpacity * 100;
            curOpacity = (prevOpacity - opacityIncrementAmount) / 100;
            setOpacity(curOpacity);
            await wait(opacityIncrementTime);
        }
        setOpacity(to);
        resolve(true);
    });

    const inflate = (props) => new Promise(async (resolve) => {
        const {
            from = 0,
            to = 1,
            sizeIncrementAmount = INCREMENT_AMOUNT,
            sizeIncrementTime = INCREMENT_TIME
        } = props || {};
        let curSize = from;
        while (curSize < to) {
            const prevSize = curSize * 100;
            curSize = (prevSize + sizeIncrementAmount) / 100;
            setSize(curSize);
            await wait(sizeIncrementTime);
        }
        setSize(to);
        resolve(true);
    });

    useEffect(() => {
        getMethods({ fadeOut, inflate, reset });
    }, []);

    const style = {
        transformOrigin: 'center',
        width: 'fit-content',
        height: 'fit-content',
    };

    if (opacity !== 1) style.opacity = opacity;
    if (size !== 1) style.transform = `scale(${size})`;

    return (
        <div
            style={style}
        >
            {children}
        </div>
    );
}

export default Animate;