<template>
  <app-header></app-header>
        <div class="container">
          <router-view></router-view>
        </div>
</template>

<script setup>
  import {useCounterStore} from "./stores/counter";
  const store = useCounterStore()

  store.$onAction(({
    name, 
    store,
    args, //events
    after, //hook,
    onError, //hook
    
  }) => {
    console.log(name)
    console.log(store)
    console.log(args)
    after((result) => {
      console.log(result)
    })

    onError((err) => {
      console.log(err)
    })

  })

  // store.$subscribe((mutation, state) => {
  //   console.log(state)
  //   console.log(mutation.type)
  //   console.log(mutation.storeId)
  //   console.log(mutation.payload)
  // })
</script>