<template>
  <v-app-bar 
    :elevation="2" 
    rounded 
    height="70"
    class="bg-orange-accent-1"
  >

    <v-app-bar-nav-icon 
      variant="text" 
      @click.stop="isDrawerOpen = !isDrawerOpen"
    />

    <v-toolbar-title class="nav__title">Medway Ranch</v-toolbar-title>

    <v-spacer />

  </v-app-bar>

  <v-navigation-drawer
    v-model="isDrawerOpen"
    temporary
    width="600"
  >
    <v-list
      
    >
      <v-list-item 
        v-for="(item, i) in items[0].children"
        :key="i"
        :value="item"
        class="nav__item"
        @click.stop="isDrawerOpen = false"
      >
        <router-link 
          :to="item.path"
          class="nav__link"          
        >
          {{ item.name }}
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
import { routes } from '@/router';
export default {
  data() {
    return {
      isDrawerOpen: false,
      group: null,
      items: routes
    }
  },

  methods: {
    openNavMenu() {
      console.log('hello');
    },
  },

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style lang="scss" scoped>
    @import './AppBar.scss';
</style>