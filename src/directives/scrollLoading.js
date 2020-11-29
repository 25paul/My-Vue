import Vue from 'vue';

Vue.directive('scroll-loading', {
  bind (el, binding) {
    el.addEventListener('scroll', () => {
      let i_scrollTop = el.scrollTop;
      let i_scrollHeight = el.scrollHeight;
      let i_clientHeight = el.clientHeight;
      if (i_scrollTop + i_clientHeight === i_scrollHeight) {
        binding.value(el);
      }
    })
  }
})

// elementui也可以应用；滚动条件的判断也可以放在这里