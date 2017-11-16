import Vue from 'vue'

import { LgsSpinner } from 'lgs-vue'
import 'lgs-vue/index.css'

import LgsAlert from '../../src/LgsAlert.vue'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#usage',
  components: {
    LgsSpinner,
    LgsAlert
  }
})
