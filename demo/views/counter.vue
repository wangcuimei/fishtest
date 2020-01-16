<template>
  <div>
    <span>{{num}}</span>
    <button @click="cal">点击</button>
  </div>
</template>
<script>
  export default {
    props: {
      num: {
        type: Number
      }
    },
    methods: {
      cal() {
        this.$bus.emit('add', 2)
      }
    }
  }
</script>