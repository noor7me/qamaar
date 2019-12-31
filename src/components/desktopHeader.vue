<template>
    <v-app-bar
        app
        color="primary"
        dark
    >
    <div class="d-flex align-center">
    <v-img
        alt="QAMAAR Logo"
        class="shrink mr-2"
        contain
        src="/assets/BIGQ.jpg"
        transition="scale-transition"
        width="40"
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
</template>

<script>
export default {

}
</script>

<style>

</style>