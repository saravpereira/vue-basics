<template>
    <app-header />

    <div class="container">
        <!-- {{ name }} -->
        <UserProfile 
        :alsoKnownAs="data.name"
        :userLastName="data.lastname"
        :userAge="data.age"
        :userParents="data.parents"
        @update-lastname="data.lastname = $event"
        @say-hello="alertHello"
        :updateAge="updateAge"

    />

        <button @click="updateName">Update name</button>

    </div>
    <Footer></Footer>
    
</template>

<!-- if you are using only composition api and not mix with options -->
<script setup>
    import Footer from '@/components/header_footer/footer.vue'
    import UserProfile from '@/components/User/profile.vue'
    import {ref, reactive} from 'vue'
    const name = ref('Content')
    const data = reactive({
        name: 'Rocket',
        lastname: 'Jones',
        age: 28,
        parents: {
            father: 'Mario',
            mother: 'Martha'
        }
    })

    const updateName = () => {
        data.name="Golden Child"
    }

    const alertHello = () => {
        alert('Hello')
    }

    const updateAge = (value) => {
        data.age = value
    }

</script>

<!-- <script>
    export default {
        setup() {
            const name = 'Francis'

            return {
                name
            }
        }
    }
</script> -->

<style>
    body {
        padding:0;
        margin:0;
        font-family: 'Roboto', sans-serif;
    }
    .container {
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }
</style>