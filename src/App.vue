<template>
  <div id="app">
    <check-box></check-box>
    <check-box-style></check-box-style>
    <check-box-perform></check-box-perform>
  </div>
</template>

<script>
import CheckBox from './components/checkbox.vue';
import CheckBoxStyle from './components/checkBoxStyle.vue';
import CheckBoxPerform from './components/checkBoxPerform.vue';
export default {
  name: 'app',
  components: {
    CheckBox,
    CheckBoxStyle,
    CheckBoxPerform
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: space-between;
  width: 1800px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
