<template>
  <v-app-bar :elevation="2" rounded class="bg-orange-accent-1">

    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Medway Ranch</v-toolbar-title>

    <v-spacer></v-spacer>

  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list
      :items="items"
    ></v-list>
  </v-navigation-drawer>

</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      items: [
        {
          title: 'About',
          value: 'about',
        },
        {
          title: 'Contact',
          value: 'contact',
        },
      ],
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
