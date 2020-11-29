import Vue from 'vue';

Vue.directive('popup-drag', {
  bind(el) {
    console.log(el.style);
    el.style.cssText += '; cursor: move;';
    el.onmousedown = (e) => {
      console.log(e)
    }
  }
})