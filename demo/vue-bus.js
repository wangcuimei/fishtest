//插件用法
//Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
const install = function (Vue) {
  var bus = new Vue({
    methods: {
      on(event, callback) {
        this.$on(event, callback);
      },
      off(event, callback) {
        this.$off(event, callback);
      },
      emit(event, ...args) {
        this.$emit(event, ...args);
      }
    }
  })
  //添加实例方法
  Vue.prototype.$bus = bus;
};

export default install;