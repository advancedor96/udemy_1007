<template>
<nav class="navbar is-success" role="navigation" aria-label="main navigation">
  <div class="container is-max-desktop px-2">
    <div class="navbar-brand">

      <div class="navbar-item is-size-4 is-family-monospace">
        Noteballs
      </div>
      <a
        @click.prevent="showMobileNav = !showMobileNav"
        class="navbar-burger"
        :class="{ 'is-active' : showMobileNav }"
        aria-expanded="false"
        aria-label="menu"
        data-target="navbarBasicExample"
        role="button"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <RouterLink
          to="/"
          class="navbar-item"
          active-class="is-active"
        >
          Notes
        </RouterLink>
        <RouterLink
          to="/stats"
          class="navbar-item"
          active-class="is-active"
        >
          Stats
        </RouterLink>
      </div>
    </div>
  </div>
</nav>
</template>
<script setup>

// import { RouterLink } from 'vue-router'
import {ref} from 'vue'

const showMobileNav = ref(false)

</script>