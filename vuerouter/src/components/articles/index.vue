<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  
      <!--  ITEM -->
      <div 
        v-for="(article, index) in data.articles"
        :key="article.id"
        class="col">
          <div class="card shadow-sm">
              <img class="bd-placeholder-img card-img-top" :src="article.img + '?' +index" />
              <div class="card-body">
                  <p>{{ article.excerpt }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <router-link :to="'/articles/'+article.id">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>

                        </router-link>
                      </div>
                  </div>
              </div>
          </div>
      </div>  
  
  </div>
  <router-view></router-view>

  </template>

<script setup>
    import axios from 'axios';
    import {reactive, onMounted} from 'vue';

    const data = reactive({
        articles: []
    })

    onMounted(() => {
        axios.get('http://localhost:3004/articles').then(response => {
            data.articles = response.data
        })
    })


</script>