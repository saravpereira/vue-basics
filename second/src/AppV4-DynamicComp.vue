<!-- Dynamic import, keep alive, teleport -->

<template>
    <app-header />

    <div class="container">
        <button @click="activeComp = Mike">Mike</button>
        <button @click="activeComp = Steve">Steve</button>

        <!-- <Mike v-if="activeComp === Mike"/>
        <Steve v-if="activeComp === Steve" /> -->
        <keep-alive include="mike,steve">
            <component :is="activeComp" />
        </keep-alive>

        <!-- <keep-alive exclude="steve">
            <component :is="activeComp" />
        </keep-alive> -->
        <div id="dialog_here">

        </div>
    </div>
    
</template>

<script setup>
    import Mike from '@/components/Players/mike.vue'
    import Steve from '@/components/Players/steve.vue'
    import {shallowRef} from 'vue'

    const activeComp = shallowRef(Mike)

   
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