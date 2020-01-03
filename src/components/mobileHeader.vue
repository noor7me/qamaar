<template>
    <div>
        <v-app-bar
            app
            dark
            color="primary"
            dense
            flat
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer" 
                color="success"
                v-show="!searchOn && !drawer"
            >
            </v-app-bar-nav-icon>

            <div  v-show="drawer" class="mdi-alpha-box">
              <v-icon
                size="30"
                color="success"
                @click="closeDrawer()"
               
              >mdi-alpha-x-box-outline</v-icon>
            </div>

              <div>
                  <v-img
                     
                      alt="QAMAAR Logo"
                      class="shrink mr-2"
                      contain
                      src="/assets/logo2.jpg"
                      transition="scale-transition"
                      width="24"
                      
                  />
              </div>
                <v-spacer></v-spacer>
                <v-text-field
                      class="search-box"
                      v-show="searchOn"
                      v-model="message"
                      outlined
                      filled
                      autofocus
                      solo-inverted
                      dense
                      flat
                      clearable
                      label="Search Qamaar Store"
                      type="text"
                      color="success"
                      prepend-inner-icon="mdi-magnify"
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

        <v-navigation-drawer  
              v-model="drawer"
              clipped
              absolute
              width="960"
              height="960"
                   
            >
            <v-spacer></v-spacer>

            <div class="drawer-box"
            >       
                <v-row>
                  <v-col cols="12"
                    xs="6"
                    sm="6"

                  >
                  <v-row
                    justify="space-around"
                  >
                      <div
                        v-for="scarf in scarfs"
                        :key="scarf.id"
                        class="card-box"
                      >
                        <v-img
                          :src=scarf.image
                          width="200"
                          height="200"
                          contain
                        
                        ></v-img>
                      </div>

                      </v-row>
                  </v-col>
                </v-row>

                
        </div>
      </v-navigation-drawer>
      
    </div>
</template>

<script>
  export default {
    name: 'mobileHeader',
    data() {
      return{
        drawer: false,
        group: false,

        searchOn: false,
        message: "",

        scarfs: [
          {
            id: 1,
            title: "Cotton",
            describtion: "2020 newly designed scarf",
            image:    "assets/images/xyz.jpg"

          },

          {
            id: 2,
            title: "Cotton",
            describtion: "2020 newly designed scarf",
            image:    "assets/images/silk2.jpg"
          },

          
          {
            id: 3,
            title: "Cotton",
            describtion: "2020 newly designed scarf",
            image:    "assets/images/pleated.jpg"
          },

          {
            id: 4,
            title: "Cotton",
            describtion: "2020 newly designed scarf",
            image:    "assets/images/catton.jpg"
          },

          {
            id: 5,
            title: "Cotton",
            describtion: "2020 newly designed scarf",
            image:    "assets/images/chiffon1.jpg"
          },

          {
            id: 6,
            title: "Cotton",
            describtion: "2020 newly designed scarf",
            image:    "assets/images/cashmere.jpg"
          },

          {
            id: 7,
            title: "Cotton",
            describtion: "2020 newly designed scarf",
            image:    "assets/images/cashmere.jpg"
          },

            {
            id: 8,
            title: "Cotton",
            describtion: "2020 newly designed scarf",
            image:    "assets/images/sunshine.jpg"
          },
        ]
      }
    },

  methods: {
    closeSearch() {
      this.searchOn = !this.searchOn    //exit search mode
    },
    closeDrawer() {
      this.drawer = !this.drawer;
    }
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
  .drawer-box{
    margin-top: 40px;
  }
  .mdi-alpha-box{
    margin-right: 6px;
  }
  .logo-box{
    margin-left: 25px;
  }
  .product-box{
    margin-top: 40px;
    background-color: blue;
    width: 100px;
    height: 100px;
  }
  .card-box{
    margin-top: 25px;
  
    width: 160px;
    height: 260px;
  }

  .card-box:hover{
    transform: scale(1.05);
    box-shadow: 0 3px 12px 0 rgba(0, 160, 35, 0.4), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  }
  .footer-box{
    margin-top: 60px;
  }
</style>