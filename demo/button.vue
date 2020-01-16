<template>
  <button @click="clickMe" :style="sty">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: "rgb(0, 204, 102)"
      }
    },
    computed: {
      sty() {
        return "background:" + this.color;
      }
    },
    methods: {
      clickMe(e) {
        this.$emit('click');
      }
    }
  }
</script>
<style scoped>
  button {
    border: 0;
    outline: none;
    color: #fff;
    padding: 4px 8px;
  }

  button:active {
    position: relative;
    top: 1px;
    left: 1px;
  }
</style>