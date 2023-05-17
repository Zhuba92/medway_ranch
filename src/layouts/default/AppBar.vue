<template>
  <v-app-bar :elevation="2" rounded class="bg-orange-accent-1">

    <v-app-bar-nav-icon
      @click="openNavMenu"
    ></v-app-bar-nav-icon>

    <v-app-bar-title>Medway Ranch {{ this.greeting }}</v-app-bar-title>

  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  },

  methods: {
    openNavMenu() {
      console.log('hello');
    },
  },
}
</script>
