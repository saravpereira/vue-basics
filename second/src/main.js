import { createApp } from "vue";
import App from "./App.vue";

import Header from "@/components/header_footer/header.vue";

const app = createApp(App);

app.directive("awesome", {
  created(el) {
    console.log("Created", el.parentNode);
  },
  beforeMount(el, binding, vnode) {
    el.style.color = binding.modifiers.red ? "red" : "blue";
    el.style.fontSize = binding.modifiers.big ? "20px" : "10px";

    // if (binding.arg === "red") {
    //   el.style.color = "red";
    // } else if (binding.arg == "blue") {
    //   el.style.color = "blue";
    // } else {
    //   el.style.color = "green";
    // }
    el.innerHTML = binding.value;
    console.log("beforeMount", el.parentNode);
  },
  mounted(el) {
    console.log("mounted", el.parentNode);
  },
  beforeUpdate(el, binding) {
    console.log("beforeUpdate", el.parentNode);
    el.innerHTML = binding.value;
  },
  updated() {
    console.log("updated");
  },
  unmounted() {},
});
app.component("app-header", Header);
app.mount("#app");
