export const defined = (item) => item !== null && item !== undefined;

export const wait = (miliseconds) => new Promise((resolve) => {
    setTimeout(resolve, miliseconds);
});