<template>
    <div>
        <v-app-bar
            app
            dark
            color="primary"
            dense
        >
       
            <v-app-bar-nav-icon 
              @click.stop="drawer = !drawer" 
              color="success"
              v-show="!searchOn"
              >
              </v-app-bar-nav-icon>
           
              <div class="d-flex align-center">
                  <v-img
                      v-show="!searchOn"
                      alt="QAMAAR Logo"
                      class="shrink mr-2"
                      contain
                      src="/assets/BIGQ.jpg"
                      transition="scale-transition"
                      width="20"
                  />
              </div>
                <v-spacer></v-spacer>
                <v-text-field
                    v-show="searchOn"
                    type="text"
                    outlined
                    filled
                    flat
                    clearable
                    dense
                    solo-inverted
                    color="success"
                    prepend-inner-icon="mdi-magnify"
                  
                    label="Search Qamaar store"
                    class="search-box"


                  >

                </v-text-field>
         
            <div class="my-2"> 
              <v-btn
                v-show="searchOn"
                tile
                color="primary black--text"
                elevation = "0"
                depressed

                exact
                width="10px"
                height="40px"
                @click="closeSearch()"
                >
                <span class="cancel-text">Cancel</span>
                
              </v-btn> 
              </div>           
            <div v-show="!searchOn">
              <v-btn icon>
                  <v-icon color="success"
                    @click="closeSearch()"
                  >mdi-magnify</v-icon>
              </v-btn>

              <v-btn icon>
                  <v-icon color="success">mdi-cart</v-icon>
              </v-btn>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
  export default {
    name: 'mobileHeader',
    data() {
      return{
        drawer: false,
        group: false,

        searchOn: false
      }
    },

  methods: {
    closeSearch() {
      this.searchOn = !this.searchOn    //exit search mode
    },
  },
    watch: {
      group () {
        this.drawer = false
        },
      },
    }
</script>

<style scoped>
  .search-box{
    margin-top: 28px;
    margin-right: 10px;
    width: 240px;
  }
  .cancel-text{     
    font-size: 10px;
    font-style: normal;
  }


</style>