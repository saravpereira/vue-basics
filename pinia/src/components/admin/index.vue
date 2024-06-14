<template>
  <div class="row">
    <h1>Admin</h1>
    <hr />
    <div class="col-sm-5">
      <p>
        <strong> Change count:{{ count }} </strong>
      </p>
<!-- 
      <div>
        <label class="form-label">By how much</label>
        <input type="number" class="form-control" v-model="data.amount" />
      </div> -->
      <br />

      <button type="button" class="btn btn-primary me-3" @click="store.counter++">+</button>
      <button type="button" class="btn btn-outline-secondary" @click="store.counter--">-</button>

      <hr/>
      <p>{{ store.car.brand }}</p>
      <p>{{ store.car.color }}</p>
      <button class="btn btn-primary" type="button" @click="patchState">
        Patch state
      </button>
    </div>
    <div>
      <hr />
      <ul>
        <li v-for="(post) in store.posts">
        {{ post.title }}</li>

        </ul>
        <button 
          type="button"
          class="btn btn-primary me-3"
          @click="store.getPosts(10)"
        >
          Get posts
        </button>

    </div>
  </div>
</template>

<script setup>
  import { useCounterStore } from '@/stores/counter';
  import {computed} from "vue"
  const store = useCounterStore()
  const count = computed(() => store.getCount)

  const patchState =  () => {
    store.$patch({
      counter:100,
      car: {
        brand: "Ford",
        color: "Red"
      }
    })
  }

  //doesn't do anything on unmount w/o detached
  // store.$subscribe((mutation, state) => {
  //   console.log(state)
  //   console.log(mutation.type)
  //   console.log(mutation.storeId)
  //   console.log(mutation.payload)
  // }, {detached:true})

</script>
