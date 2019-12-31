<template>
    <div>
        <v-app-bar
            app
            dark
            color="primary"
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="black"></v-app-bar-nav-icon>
            <div class="d-flex align-center">
                <v-img
                    alt="QAMAAR Logo"
                    class="shrink mr-2"
                    contain
                    src="/assets/BIGQ.jpg"
                    transition="scale-transition"
                    width="20"
                />
            </div>
            <v-spacer></v-spacer>
            
            <v-btn icon>
                <v-icon color="black">mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon color="black">mdi-cart</v-icon>
            </v-btn>     
        </v-app-bar>
    </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style>

</style>