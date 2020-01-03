<template>
  <v-app>
    <mobileHeader
      class="hidden-md-and-up"
    ></mobileHeader>
    <desktopHeader
      class="hidden-sm-and-down"
    ></desktopHeader>

    <v-content>
     
    </v-content>
  </v-app>
</template>

<script>
  import desktopHeader from "@/components/desktopHeader"
  import mobileHeader from  "@/components/mobileHeader"

  export default {
    name: 'App',

    components: {
        desktopHeader,
        mobileHeader
    },

    data: () => ({
      //
    }),
  };
</script>
