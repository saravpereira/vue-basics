<template>
    <h2>Add users</h2>
    <div v-show="loading">
        <app-loader />
    </div>
    <div>
        <div class="form-group mb-3">
            <label>Name</label>
            <input class="form-control" type="text" v-model="user.name">
        </div>

        <div class="form-group mb-3">
            <label>Lastname</label>
            <input class="form-control" type="text" v-model="user.lastname">
        </div>

        <button 
            class="btn btn-primary" 
            @click.prevent="submitForm"
        >Submit</button>
    </div>
</template>

<script setup>
    import postUsers from "@/composables/postUser";
    import { reactive, ref } from "vue";

    const user = reactive({
        name:'',
        lastname:''
    });
    
    const {submitForm, loading} = postUsers(user)

    // import axios from "axios";
    // import { useToast } from "vue-toast-notification";
    // import { reactive, ref } from 'vue';

    // const $toast = useToast();
    // const loading = ref(false);


    // const user = reactive({
    //     name:'',
    //     lastname:''
    // });

    // const submitForm = () => {
    //     loading.value = true;

    //     axios({
    //         method: "POST",
    //         url: "http://localhost:3004/users",
    //         data: user,
    //     })
    //         .then(() => {
    //         $toast.success("Great dude !!!");
    //         })
    //         .catch((error) => {
    //         $toast.error("Sorry, something went wrong");
    //         })
    //         .finally(()=>{
    //             loading.value = false;
    //         })
    // }



</script>