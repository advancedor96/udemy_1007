

<template>
  <Navbar />


  <RouterView />
</template>
<script setup>
import {  RouterView } from 'vue-router'
import Navbar from '@/components/Layout/Navbar.vue'
</script>

<style >
@import 'bulma/css/bulma.css';


</style>
