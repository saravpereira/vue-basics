<template>
    <app-header />

    <div class="container">
       <Life v-if="showit"/>
    </div>
    
</template>

<script setup>
    import Life from '@/components/Life/index.vue'
    import {ref} from 'vue'

    const showit = ref(true)

    setTimeout(() => {
        showit.value=false
    }, 3000)

</script>

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