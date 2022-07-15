import Vue from 'vue'
import { tns } from 'tiny-slider/src/tiny-slider'

const mixin = {
  methods: {
    tineSlider: conf => tns(conf)
  }
}

Vue.mixin(mixin)
