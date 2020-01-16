<template>
  <div>
    <h1>首页</h1>
    <router-link to="/about">跳转到about</router-link>

    <counter :num="num"></counter>
  </div>
</template>

<script>
  import counter from './counter.vue';
  export default {
    components: {
      counter
    },
    data: function () {
      return {
        num: 1
      }
    },
    methods: {
      handleAddNum: function (a) {
        this.num += a;
      }
    },
    created: function () {
      console.log("this对象：");
      console.log(this);
      this.$bus.on('add', this.handleAddNum);
    },
    beforeDestory: function () {
      this.$bus.off('off', this.handleAddNum);
    }
  }
</script>