import Vue from 'vue'

import './styles/quasar.sass'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar } from 'quasar'

Vue.use(Quasar, {
  config: {
    brand: {
      primary: '#4d69b0',
      secondary: '#eb8b15',
      accent: '#39babd',

      dark: '#545454',

      positive: '#68a877',
      negative: '#bf4553',
      info: '#63daf2',
      warning: '#eb8b15'
    }
  },
  plugins: {
  }
 })