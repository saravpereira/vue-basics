import axios from "axios";
import { defineStore } from "pinia";

//Export bc pinia is modular
export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 7,
    attempts: 0,
    prizes: ["Car", "Baby", "Coffee", "Guitars", "Nothing"],
    car: {
      brand: "",
      color: "",
    },
    posts: [],
  }),
  getters: {
    //no async actions
    getCount(state) {
      return state.counter;
    },
    getAttempts(state) {
      return state.attempts;
    },
    getPrizes(state) {
      let prize = "";
      state.attempts++;
      console.log(state.attempts);
      for (let step = 0; step < state.counter; step++) {
        prize = state.prizes[Math.floor(Math.random() * state.prizes.length)];
      }
      return {
        prize,
        attempts: this.getAttempts,
      };
    },
  },
  actions: {
    add() {
      this.counter++;
    },
    subtract() {
      this.counter--;
    },
    async getPosts(limit) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?&_limit=${limit}`
        );
        this.add();
        this.posts = response.data;
        console.log(this.getCount);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
