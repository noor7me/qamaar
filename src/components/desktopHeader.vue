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
            src="/assets/logo2.jpg"
            transition="scale-transition"
            width="60"
        >
        </v-img>
       
    </div>
    <div class="menu-box"    
    
        v-if="!searchOn" >
        <v-tabs
            background-color="white"
            color="green darken-4"
            align-with-title
            light
            show-arrows
        >
            <v-tab
                @change="isActive=!isActive"
            >
                <strong>
                    Chiffon
                </strong>
            </v-tab>
            <v-tab>Cashmere</v-tab>
            <v-tab>Type3</v-tab>

            <v-tab>.....</v-tab>
        </v-tabs>  
    </div>
    <div v-if="searchOn" class="search-box"> 
        <v-text-field

            v-model="message"
            outlined
            filled
            
            autofocus="true"
            solo-inverted
            
            dense
            flat
            clearable
            label="Search Qamaar Store"
            type="text"
            color="success darken-1"
            prepend-inner-icon="mdi-magnify"

            @click:clear="onClose()"
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
            loading: false,
            isActive: false

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