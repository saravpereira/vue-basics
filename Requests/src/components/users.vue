<template>
    <div class="row">
        <div v-if="data.loading">
            <app-loader />
        </div>
        <div class="col-auto mb-4"
            v-if="!data.loading"
            v-for="(user) in data.users"
            :key="user.id"
        >
            <div class="card" style="width: 14rem;">
                <img 
                    class="card-img-top" 
                    :src="'https://placebeard.it/300/300?' + user.id "
                    alt="Card image cap"
                >
                <div class="card-body">
                    <div class="card-text">
                        <strong>Name:</strong> {{ user.name }}
                    </div>
                    <div class="card-text">
                        <strong>Lastname:</strong>  {{ user.lastname }}
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script setup>
    import getUsers from '@/composables/getUsers';

    const {data, loadUsers} = getUsers()

    loadUsers()

    // import axios from 'axios';
    // import {reactive, onMounted} from 'vue'
    // import { useToast } from 'vue-toast-notification';

    // const $toast = useToast()

    // const data = reactive({
    //     loading: true,
    //     users: []
    // })

    // const loadUsers = async() => {
    //     try{
    //         const response =  await axios.get(" http://localhost:3004/users")
    //         console.log(response.data)
    //         data.users = response.data
    //         data.loading = false
    //     }catch(err) {
    //         console.log(err)
    //         data.loading = false
    //         $toast.error('Sorry, something went wrong')
    //     }
    // }

    // onMounted(()=> {
    //     loadUsers()
    // })


</script>