import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            cars: JSON.parse(localStorage.getItem("cars") || "[]"),
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
        plusCar: (state, car) => {
            const index = state.cars.findIndex((item) => item.id === car.id);
            state.cars[index].count = ++state.cars[index].count;

            localStorage.setItem("cars", JSON.stringify(state.cars));
        },
        minusCar: (state, car) => {
            const index = state.cars.findIndex((item) => item.id === car.id);

            if (state.cars[index].count <= 1) {
                state.cars = state.cars.filter((item) => item.id !== car.id);

                return localStorage.setItem("cars", JSON.stringify(state.cars));
            }

            state.cars[index].count = --state.cars[index].count;
            localStorage.setItem("cars", JSON.stringify(state.cars));
        },

        clearCar: (state) => {
            state.cars = [];
            localStorage.setItem("cars", JSON.stringify([]));
        },
    },
    actions: {},
    getters: {},
});
