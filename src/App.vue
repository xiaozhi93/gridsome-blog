<template>
  <el-scrollbar style="height: 100%">
    <main-layout>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main-layout>
  </el-scrollbar>
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