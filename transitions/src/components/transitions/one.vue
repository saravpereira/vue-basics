<template>
    <transition>
          <div class="p-3 mb-2 bg-success text-white"
        v-if="data.display"
    >
        Hello
    </div>
    </transition>
  
    <button class="btn btn-primary" 
        @click="data.display = !data.display"
    >
        Toggle
    </button>
    <hr />
    <transition>
          <div class="p-3 mb-2 bg-warning text-white"
        v-if="data.display2"
    >
        Hello
    </div>
    </transition>
  
    <button class="btn btn-primary" 
        @click="data.display2 = !data.display2"
    >
        Toggle display 2
    </button>
    <hr />
    <transition name="slide">
          <div class="p-3 mb-2 bg-warning text-white"
        v-if="data.display3"
    >
        Hello
    </div>
    </transition>
  
    <button class="btn btn-primary" 
        @click="data.display3 = !data.display3"
    >
        Toggle display 3
    </button>
</template>

<script setup>
   import { reactive } from 'vue';

   const data = reactive({
    display:false,
    display2: true,
    display3: true
   })
</script>
<style scoped>
    .v-enter-from,
    .v-leave-to
    {
        opacity:0;
    }

    .v-enter-active,
    .v-leave-active {
        transition: 1s;
    }

    .v-enter-to,
    .v-leave-from {
        opacity: 1;
    }

    /**----------------- */

    .slide-enter-from {
        transform: translateX(20px);
        opacity: 0;
    }

    .slide-enter-active {
        transition: all 1s ease;
    }
    .slide-enter-to {
        opacity: 1;
    }

    .slide-leave-from {
        opacity: 1;
        background-color: red !important;
    }

    .slide-leave-active {
        transition: all .3s ease;
    }

    .slide-leave-to {
        background-color: black !important;
        transform: translateX(100px);
        opacity: 0;
    }

    /* .slide-enter-from,
    .slide-leave-to
    {
        opacity:0;
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: 1s;
    }

    .slide-enter-to,
    .slide-leave-from {
        opacity: 1;
    } */
</style>
