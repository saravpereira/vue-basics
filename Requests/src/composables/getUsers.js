import axios from "axios";
import { reactive } from "vue";
import { useToast } from "vue-toast-notification";

//composable; for reusability

const getUsers = () => {
  const $toast = useToast();

  const data = reactive({
    loading: true,
    users: [],
  });

  const loadUsers = async () => {
    try {
      const response = await axios.get(" http://localhost:3004/users");
      console.log(response.data);
      data.users = response.data;
      data.loading = false;
    } catch (err) {
      console.log(err);
      data.loading = false;
      $toast.error("Sorry, something went wrong");
    }
  };

  return { data, loadUsers };
};

export default getUsers;
