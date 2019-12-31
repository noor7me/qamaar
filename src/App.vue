<template>
  <v-app>
    <mobileHeader
      v-if="$vuetify.breakpoint.xsOnly || $vuetify.breakpoint.smOnly"
    ></mobileHeader>
    <desktopHeader
      v-else
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
