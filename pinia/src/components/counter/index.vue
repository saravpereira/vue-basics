<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Count</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">{{ count }}</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3" @click="store.add">
          +
        </button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="store.subtract">
          -
        </button>
        <hr />
        <button 
          type="button"
          class="btn btn-outline-secondary btn-lg px-4"
          @click="getPrizeHandler"
        >
          Get prize
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useCounterStore } from '@/stores/counter';
  import {computed} from "vue"
  const store = useCounterStore()

  /**
   * used to define reactive data properties that are derived from other data properties. 
   * They are cached based on their dependencies, meaning they only re-evaluate when the underlying data changes. 
   * This makes them efficient and ideal for performance-critical logic.
   */
  const count = computed(() => store.counter)

  const getPrizeHandler = ()=> {
    alert(`${store.getPrizes.prize} & ${store.getPrizes.attempts}`)
  }

</script>
