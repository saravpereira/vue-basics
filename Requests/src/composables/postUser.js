import axios from "axios";
import { useToast } from "vue-toast-notification";
import { ref } from "vue";

//composable; for reusability

const postUsers = (user) => {
  const $toast = useToast();
  const loading = ref(false);

  const submitForm = () => {
    loading.value = true;

    axios({
      method: "POST",
      url: "http://localhost:3004/users",
      data: user,
    })
      .then(() => {
        $toast.success("Great dude !!!");
      })
      .catch((error) => {
        $toast.error("Sorry, something went wrong");
      })
      .finally(() => {
        loading.value = false;
      });
  };

  return { submitForm, loading };
};

export default postUsers;
