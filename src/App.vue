<template>
  <main-layout>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </main-layout>
</template>
<script>
import MainLayout from '~/layouts/MainLayout'
export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>