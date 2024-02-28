export const calcTotalPrice = (cars) => {
    return cars.reduce((acc, currentValue) => {
        return acc + currentValue.price * currentValue.count;
    }, 0);
};
