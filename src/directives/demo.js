import Vue from 'vue';

Vue.directive('load', {
  bind (el, binding, vnode, oldVnode) {
    console.log('el', el);
    console.log('binding', binding);
    console.log('vnode', vnode);
    console.log('oldVnode', oldVnode);
    console.log('bind')
    binding.value();
  },
  inserted (el, binding, vnode, oldVnode) {
    console.log('el', el);
    console.log('binding', binding);
    console.log('vnode', vnode);
    console.log('oldVnode', oldVnode);
    console.log('inserted')
    binding.value();
  },
  update (el, binding, vnode, oldVnode) {
    console.log('el', el);
    console.log('binding', binding);
    console.log('vnode', vnode);
    console.log('oldVnode', oldVnode);
    console.log('update')
    binding.value();
  },
  componentUpdated (el, binding, vnode, oldVnode) {
    console.log('el', el);
    console.log('binding', binding);
    console.log('vnode', vnode);
    console.log('oldVnode', oldVnode);
    console.log('componentUpdated')
    binding.value();
  },
  unbind (el, binding, vnode, oldVnode) {
    console.log('el', el);
    console.log('binding', binding);
    console.log('vnode', vnode);
    console.log('oldVnode', oldVnode);
    console.log('unbind')
    binding.value();
  },
})