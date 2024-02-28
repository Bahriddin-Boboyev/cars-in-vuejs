export const calcBasketCount = (cars) => {
    return cars.reduce((acc, currentValue) => {
        return acc + currentValue.count;
    }, 0);
};
