<template>
    <v-app-bar
        app
        color="primary"
        dark
        flat
        dense
        
    >
    <div class="d-flex align-center">
        <v-img
            alt="QAMAAR Logo"
            class="shrink mr-2"
            contain
            src="/assets/BIGQ.jpg"
            transition="scale-transition"
            width="40"
        >
        </v-img>
       
    </div>
    <div    class="menu-box"
            v-if="!searchOn" >
        <span class="indigo--text">Menu Should appear </span>
    </div>
    <div v-if="searchOn" class="search-box"> 
        <v-text-field

            v-model="message"
            outlined
            filled
            solo-inverted
            @click:clear="onClose()"
            dense
            flat
            clearable
            label="Search Qamaar Store"
            type="text"
            color="success"
            prepend-inner-icon="mdi-magnify"
            @click:prepend-inner="onClose()"
            @keyup.enter="searchOn = !searchOn" 
               
        >
        </v-text-field>
    </div>

    <v-spacer></v-spacer>

    <v-btn icon>
        <v-icon color="success"
            @click="searchOn = !searchOn"
        >mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
        <v-icon color="success">mdi-cart</v-icon>
    </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'desktopHeader',
    data() {
        return {
            searchOn: false,
            message: "",
            loading: false

        }
    }, 
    methods: {
        clickMe()   {
            this.loading    = true,
            this.message    =   "wait for it"
            setTimeout(() => {
                this.loading    =   false,
                this.message    = " i am done !!!"
            }, 2000)
        },
        clickMe2() {
            this.searchOn = false
        },

        onClose() {
            this.searchOn = !this.searchOn; //close the search box 
            this.message  = "";              // empty the search box 
        }
    }
    
}
</script>

<style scoped>
    .search-box{
        margin-left: 500px;
        margin-top: 30px;
        width: 800px;
        border-radius: 120px;
    }
    .menu-box{
        margin-left: 200px;
    }

</style>