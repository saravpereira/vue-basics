<template>
    <div class="user_profile">
        <h3>User profile</h3>
        <ul>
            <li>
                <span>Name:</span> {{ name }}
            </li>

            <li>
                <span>Lastname:</span> {{ userLastName }}
            </li>

            <li>
                <span>AKA:</span> {{ alsoKnownAs }}
            </li>
            <li>
                <span>Age:</span> {{ userAge }}
            </li>
        </ul>
        <h3>Parents</h3>
        <ul>
            <li v-for="(value, key, index) in userParents" :key="index">
                <span>{{key }}:</span> {{ value }}
            </li>
        </ul>
        <hr />
        <button @click="updateLastName">Change from the child</button>
        <hr />
        <button @click="emit('say-hello')">Say Hello</button>
        <button @click="updateAge(50)">Update Age</button>
    </div>
</template>

<script setup>
    //emit events to the parent
    const emit = defineEmits(['update-lastname', 'say-hello'])
    // const props = defineProps(['alsoKnownAs', 'userLastName'])
    const props = defineProps({
        alsoKnownAs: {
            type: String,
            required: true,
            default: "N/A"
        },
        userLastName: {
            type: String,
            validator(value){
                if(value === 'Jones'){
                    return true
                }
                return false

            }
        },
        userAge: [Number, String],
        userParents: Object,
        updateAge: Function
    })

    const name = "Steve"
    const updateLastName = () => {
        emit('update-lastname', 'Michaelson')
    }
</script>

<style scoped>
    span {
        font-weight:800
    }
    .user_profile {
        border:1px solid #2196F3;
        padding:10px
    }

</style>