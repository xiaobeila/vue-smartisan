<template>
  <div class="app-wrapper">
    <header-nav></header-nav>
    <app-main></app-main>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav';
import AppMain from './AppMain';

export default {
  name: 'lauout',
  components: {
    HeaderNav,
    AppMain
  }
};
</script>
