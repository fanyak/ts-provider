export const getIndex = (key) => {
    const [indx] =  key.match(/\d+$/) || [];
    return indx;
}