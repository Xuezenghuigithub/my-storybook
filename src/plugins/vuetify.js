import Vue from 'vue';
// import Vuetify from 'vuetify/lib/framework';
import Vuetify from 'vuetify/lib';
import '@/assets/sass/main.scss'

Vue.use(Vuetify);

const theme = {
  primary: '#6DA4D8',
  secondary: '#FDDB55',
  error: '#EF3A61',
  success: '#51AD5A',
  info: '#6DA4D8'
};

export const options = {
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
  icons: {
    iconfont: 'mdi'
  }
}

export default new Vuetify(options);
