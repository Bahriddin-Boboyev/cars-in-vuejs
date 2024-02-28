import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            cars: JSON.parse(localStorage.getItem("cars")) || [],
        };
    },
    mutations: {
        setCars: (state, car) => {
            const cars = state.cars;
            const isExistsCar = store.state.cars.find(
                (item) => item.id === car.id,
            );

            if (!isExistsCar) {
                const newCar = { ...car, count: 1 };
                const newStore = [...cars, newCar];
                localStorage.setItem("cars", JSON.stringify(newStore));
                state.cars = newStore;
            } else {
                const carStore = { ...isExistsCar, count: ++isExistsCar.count };
                const newCars = cars.map((item) =>
                    item.id === isExistsCar.id ? carStore : item,
                );
                localStorage.setItem("cars", JSON.stringify(newCars));
                state.cars = newCars;
            }
        },
    },
    actions: {},
    getters: {},
});
