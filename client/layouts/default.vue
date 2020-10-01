<template>
  <v-app>
    <v-card
      flat
      tile
    >
      <v-toolbar
        dense
        color="primary"
        class="white--text"
      >
        <v-app-bar-nav-icon />

        <v-toolbar-title>{{ title }}</v-toolbar-title>

        <v-spacer />

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer>
      <span>Konnot &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => {
    return {
      title: '入力'
    }
  }
}
</script>
