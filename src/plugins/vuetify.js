import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: "#FFFFFF", 
            secondary: "#34026a", // #FFCDD2
            accent: colors.indigo.base, // #3F51B5
          },
        },
      },
});
