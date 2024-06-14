const { createApp, reactive, computed } = Vue;

const DEFAULT_STATE = {
  state: true,
  inputName: "",
  names: [],
  errors: "",
  showError: false,
  results: "",
};

createApp({
  setup() {
    const data = reactive(DEFAULT_STATE);

    //comuputed property
    const isReady = computed(() => {
      return data.names.length === 2;
    });

    //methods

    const addNameToList = () => {
      const userName = data.inputName;
      if (validate(userName)) {
        data.names.push(userName);
        data.inputName = "";
        data.showError = false;
      } else {
        data.showError = true;
      }
    };

    const removeName = (index) => {
      data.names.splice(index, 1);
    };

    const validate = (value) => {
      data.error = "";

      if (!value?.length) {
        data.error = "Sorry, no empty name";
        return false;
      }
      if (data.names.includes(value)) {
        data.error = "Sorry, names must be unique";
        return false;
      }
      return true;
    };

    const getRandomName = () => {
      return data.names[Math.floor(Math.random() * data.names.length)];
    };
    const generateResult = () => {
      let rand = getRandomName();
      if (data.result !== "") {
        while (rand === data.result) {
          rand = getRandomName();
        }
      }
      data.result = rand;
    };

    const showResults = () => {
      generateResult();
      data.state = false;
    };

    const resetApp = () => {
      data.state = true;
      data.inputName = "";
      data.names = [];
      data.errors = "";
      data.showError = false;
      data.results = "";
    };

    const getNewResult = () => {
      generateResult();
    };

    return {
      data,
      addNameToList,
      removeName,
      isReady,
      showResults,
      resetApp,
      getNewResult,
    };
  },
}).mount("#app");
