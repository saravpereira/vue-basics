<template>
    <!-- <div v-awesome="textToRender"></div>
    <div v-awesome:red="textToRender"></div>
    <div v-awesome:blue="textToRender"></div> -->
    <div v-user-lastname="lastname"></div>
    <div v-awesome.red.big="textToRender"></div>
    <div v-awesome.blue.small="textToRender"></div>
    <button @click="textToRender = 'Something else'">trigger update</button>


</template>

<script setup>
    import {ref} from 'vue';
    const textToRender = ref('Some text')
    const lastname = ref('Jones')

    const vUserLastname = {
        beforeMount(el, binding){
            el.innerHTML  = binding.value;
            el.style.color='red'
        }
    }
</script>