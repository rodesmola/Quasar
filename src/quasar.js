import Vue from 'vue'

import './styles/quasar.sass'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, Notify } from 'quasar'

Vue.use(Quasar, {
  config: {
    brand: {
      primary: '#4d69b0',//'#2f4050',
      secondary: '#eb8b15',//'#19aa8d', 
      accent: '#39babd',

      dark: '#545454',

      positive: '#68a877',
      negative: '#bf4553',
      info: '#63daf2',
      warning: '#eb8b15'
    }
  },
  plugins: {
    Notify
  }
 })