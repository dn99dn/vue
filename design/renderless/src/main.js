import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // render 함수 변환과정
  // render: function(createElement) {
  //   return createElement(App);
  // }
  // render: function(h) {
  //   return h(App);
  // }
  // render: (h) => {
  //   return h(App);
  // }
  // render: h => return h(App);
  
}).$mount('#app')
