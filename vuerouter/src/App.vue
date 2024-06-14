<template>
  <app-header></app-header>
        <div class="container">
          <router-view />
          <router-view name="notify"/>
        </div>
    <app-footer></app-footer>
</template>